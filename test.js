let a = {
  c:1,
  d:2,
  b: function(){
    console.log('d',this.d)
    setTimeout(()=>{
      console.log(this.c)
    }, 10);
  }
}
a.b()