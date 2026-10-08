// SQLite stays in this browser. This is a public demonstrator, not an auth boundary.
export function sqliteAdapter(db:any){
 return {
  prepare(sql:string){let values:any[]=[];const rows=()=>{const s=db.prepare(sql);try{s.bind(values);const out:any[]=[];while(s.step())out.push(s.getAsObject());return out}finally{s.free()}};const run=()=>{db.run(sql,values);return {meta:{changes:db.getRowsModified()}}};return {bind(...v:any[]){values=v;return this},async first(){return rows()[0]??null},async all(){return {results:rows()}},async run(){return run()},_exec:run}},
  async batch(statements:any[]){db.run('BEGIN');try{const result=statements.map(s=>s._exec());db.run('COMMIT');return result}catch(e){db.run('ROLLBACK');throw e}}
 };
}

export function createDemoEngine(SQL:any,schema:string,handle:any,storage:any){
 return async function execute(request:Request){
  const state=await storage.load();
  const db=state?new SQL.Database(state.bytes):new SQL.Database();
  db.run('PRAGMA foreign_keys=ON');if(!state)db.run(schema);
  const files=new Map<string,Uint8Array>(state?.files??[]);
  try{
   const response=await handle(request,{DB:sqliteAdapter(db),BUCKET:{async put(k:string,b:Uint8Array){files.set(k,b)},async get(k:string){return files.has(k)?{body:files.get(k)}:null},async delete(k:string){files.delete(k)}},launcherAllowed:true,platform:'presentation-browser'});
   // Commit database and attachments together. Never report success before durable storage.
   if(response.status<500)await storage.save({bytes:db.export(),files:[...files.entries()]});
   return response;
  }finally{db.close()}
 };
}
