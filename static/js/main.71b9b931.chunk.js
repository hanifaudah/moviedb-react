(this["webpackJsonpmoviedb-react"]=this["webpackJsonpmoviedb-react"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),i=(n(24),n(2)),s=n(3),l=n(5),u=n(4),m=n(6),h=n(18),p=n.n(h),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},n.onSubmit=function(e){e.preventDefault(),n.props.changeQuery(n.state.query),n.setState({query:""})},n.onChange=function(e){return n.setState({query:e.target.value})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("h3",null,"MovieDB"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"form-inline"},r.a.createElement("input",{value:this.state.query,onChange:this.onChange,id:"search",className:"form-control mr-sm-2",type:"search",placeholder:"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))}}]),t}(a.Component),d=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"d-flex flex-column align-items-center",style:f},r.a.createElement("img",{alt:"",src:"http://image.tmdb.org/t/p/w200"+e.poster_path}),r.a.createElement("h4",{style:{marginTop:"1em"}},e.title),r.a.createElement("p",null,e.release_date),r.a.createElement("button",{className:"btnDefault"},"Details"))}}]),t}(a.Component)),f={margin:"1em",padding:"1em",borderRadius:"15px",border:"2px solid grey",width:"15em",textAlign:"center"},v=d,y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center"},this.props.movies.map((function(e){return r.a.createElement(v,{key:e.id,movie:e})})))}}]),t}(a.Component),g=(n(42),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],query:""},n.changeQuery=function(e){n.setState({query:"http://api.themoviedb.org/3/search/movie?api_key=95368f360e3dc457d2f213e11967e205&query="+e}),console.log(n.state.query)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://api.themoviedb.org/3/search/movie?api_key=95368f360e3dc457d2f213e11967e205&query=spiderman").then((function(t){return e.setState({movies:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{changeQuery:this.changeQuery}),r.a.createElement(y,{movies:this.state.movies}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.71b9b931.chunk.js.map