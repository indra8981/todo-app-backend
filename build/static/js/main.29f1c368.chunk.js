(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(23),l=a.n(i),s=(a(50),a(31)),r=a(25),d=a(17),c=a(18),u=a(21),m=a(19),p=a(22),h=a(61),b=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{fixed:"top",bg:"primary",variant:"dark"},o.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Todo App"))}}]),t}(n.Component),E=a(60),f=a(35),v=a(34),g=a.n(v),y=(a(98),a(57),a(102)),T=a(62),C=a(7),j=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,{id:"contained-modal-title-vcenter"},"Edit ToDo")),o.a.createElement(y.a.Body,null,o.a.createElement(C.a,null,o.a.createElement(C.a.Group,{controlId:"formBasicTitle"},o.a.createElement(C.a.Label,null,"Title"),o.a.createElement(C.a.Control,{required:!0,name:"title",onChange:this.props.editChangeHandler,defaultValue:this.props.title,placeholder:"Enter Title"})),o.a.createElement(C.a.Group,{controlId:"formBasicDescription"},o.a.createElement(C.a.Label,null,"Description"),o.a.createElement(C.a.Control,{required:!0,as:"textarea",name:"description",onChange:this.props.editChangeHandler,defaultValue:this.props.description,placeholder:"Please enter a Description"})))),o.a.createElement(y.a.Footer,null,o.a.createElement(T.a,{onClick:this.props.edit},"Save"),o.a.createElement(T.a,{onClick:this.props.delete},"Delete"),o.a.createElement(T.a,{onClick:this.props.onHide},"Close"))))}}]),t}(n.Component),O=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,{id:"contained-modal-title-vcenter"},"Add ToDo")),o.a.createElement(y.a.Body,null,o.a.createElement(C.a,null,o.a.createElement(C.a.Group,{controlId:"formBasicTitle"},o.a.createElement(C.a.Label,null,"Title"),o.a.createElement(C.a.Control,{name:"title",onChange:this.props.editChangeHandler,defaultValue:"",placeholder:"Enter Title"})),o.a.createElement(C.a.Group,{controlId:"formBasicDescription"},o.a.createElement(C.a.Label,null,"Description"),o.a.createElement(C.a.Control,{as:"textarea",name:"description",onChange:this.props.editChangeHandler,defaultValue:"",placeholder:"Please enter a Description"})))),o.a.createElement(y.a.Footer,null,o.a.createElement(T.a,{onClick:this.props.addTodo},"Save"),o.a.createElement(T.a,{onClick:this.props.onHide},"Close"))))}}]),t}(n.Component),H=a(40);var k=function(e){return console.log(e),o.a.createElement("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",minHeight:"200px",top:70,right:20}},o.a.createElement("div",{style:{position:"relative",top:0,right:0}},o.a.createElement(H.a,{show:e.showToast,onClose:e.closeToast,delay:3e3,autohide:!0},o.a.createElement(H.a.Header,null,o.a.createElement("strong",{className:"mr-auto"},e.heading)),o.a.createElement(H.a.Body,null,e.body))))},S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).editChangeHandler=function(e){var t=e.target;a.setState(Object(E.a)({},t.name,t.value))},a.editTodo=function(){console.log(a.state),g.a.post("/todos/update/".concat(a.state.id),a.state).then(function(e){var t=a.state.todos,n=a.state.index[a.state.id];t[n].title=a.state.title,t[n].description=a.state.description,a.setState({todos:t,modalVisible:!1,showToast:!0,toastHeading:"Success!",toastbody:"Todo edited and saved Successully"})}).catch(function(e){a.setState({showToast:!0,toastHeading:"Error!",toastbody:e.response.data})})},a.addTodo=function(){g.a.post("/todos/add/",a.state).then(function(e){var t=e.data,n=a.state.todos;n.push(t);var o=a.state.index;o[t._id]=n.length-1,a.setState({todos:n,index:o,addmodalVisible:!1,showToast:!0,toastHeading:"Success!",toastbody:"Todo added Successully"})}).catch(function(e){a.setState({showToast:!0,toastHeading:"Error!",toastbody:e.response.data})})},a.onClick=function(e,t,n){a.setState({modalVisible:!0,id:e,title:t,description:n})},a.deleteToDo=a.deleteToDo.bind(Object(f.a)(a)),a.state={todos:[],showToast:!1,toastHeading:"",toastbody:"",id:"",title:"",description:"",addmodalVisible:!1,modalVisible:!1,index:{},active:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateIndex",value:function(e){console.log(e);var t={};return e.forEach(function(e,a){t[e._id]=a}),t}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/todos/").then(function(t){var a=e.updateIndex(t.data);e.setState({todos:t.data,index:a})}).catch(function(e){console.log(e)}),console.log(this.state.todos),this.updateIndex(this.state.todos)}},{key:"deleteToDo",value:function(e){var t=this;g.a.delete("/todos/".concat(e)).then(function(a){var n=t.state.todos.filter(function(t){return t._id!==e}),o=t.updateIndex(n);t.setState({todos:n,index:o,modalVisible:!1,showToast:!0,toastHeading:"Success!",toastbody:"Todo deleted Successully"})}).catch(function(e){t.setState({showToast:!0,toastHeading:"Error!",toastbody:e.response.data})})}},{key:"todoList",value:function(){var e=this;return this.state.todos.map(function(t,a){return o.a.createElement("div",{type:"button",onClick:function(){return e.onClick(t._id,t.title,t.description)},className:"to-do",key:t.id},o.a.createElement("div",{className:"to-do-title"},t.title),o.a.createElement("div",{className:"to-do-description"},t.description))})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"mainbody"},o.a.createElement(k,{showToast:this.state.showToast,heading:this.state.toastHeading,body:this.state.toastbody,closeToast:function(){e.setState({showToast:!1})}}),o.a.createElement("div",null,o.a.createElement(T.a,{variant:"primary",onClick:function(){e.setState({title:"",description:"",addmodalVisible:!0})}},"Create a ToDo")),o.a.createElement("div",{className:"todolisthead"},"Active Todos"),o.a.createElement("table",{className:"table"},o.a.createElement("tbody",null,this.todoList())),o.a.createElement(j,Object.assign({},this.props,this.state,{editChangeHandler:function(t){e.editChangeHandler(t)},edit:function(){e.editTodo()},show:this.state.modalVisible,delete:function(){e.deleteToDo(e.state.id)},onHide:function(){return e.setState({modalVisible:!1})}})),o.a.createElement(O,Object.assign({},this.props,this.state,{editChangeHandler:function(t){e.editChangeHandler(t)},addTodo:function(){e.addTodo()},show:this.state.addmodalVisible,onHide:function(){return e.setState({addmodalVisible:!1})}})))}}]),t}(n.Component);var w=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(b,null),o.a.createElement("br",null),o.a.createElement(r.a,{path:"/",exact:!0,component:S})))};l.a.render(o.a.createElement(w,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(100)},98:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.29f1c368.chunk.js.map