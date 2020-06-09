(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},52:function(e,t,a){e.exports=a(84)},75:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),s=a.n(r),c=a(5),o=a(91),i=a(93),u=a(94),m=a(15),d=a(10),p=a(11),h=a(13),E=a(12),g=a(14),v=a(7),f=a.n(v),C={NewRol:function(e){return f.a.post("/api/role",e)},getAllRoles:function(){return f.a.get("/api/role")},deleteRole:function(e){return f.a.delete("/api/role/",e)},getOneRole:function(e){return f.a.post("/api/getOneRole",e)},updateOneRole:function(e){return f.a.put("/api/role",e)},loginSession:function(){return f.a.get("/api/login")},usersLogin:function(e){return f.a.post("/api/login",e)},saveNewUser:function(e){return f.a.post("/api/user",e)},getAllUsers:function(){return f.a.get("/api/user")},getOneUser:function(e){return f.a.post("/api/getOneUser",e)},getAllServices:function(){return f.a.get("/api/service")},saveNewService:function(e){return f.a.post("/api/service",e)},deleteService:function(e){return f.a.delete("/api/service",e)},getOneServiceInfo:function(e){return f.a.post("/api/getOneService",e)},updateOneService:function(e){return f.a.put("/api/service",e)},getAllCustomers:function(){return f.a.get("/api/assignServicesAndAllCustomers")},assignAllServiceToClient:function(e){return f.a.post("/api/assignServicesAndAllCustomers",e)},getAllDeparments:function(){return f.a.get("/api/getAllDeparments")},getAllServiceCustomers:function(){return f.a.get("/api/serviceCustomer")},serviceClient:function(e){return f.a.post("api/serviceCustomer",e)},updateStatus:function(e){return f.a.put("/api/serviceCustomer",e)},updateEmployee:function(e){return f.a.put("/api/serviceCustomerAssignedEmployeeUpdate",e)}};a(75);function b(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function S(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}a(23),a(76);function y(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function I(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}function O(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"colDarkBg col-"+e}).join(" ")},a)}a(24);var A=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",alertText:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),C.usersLogin({email:a.state.email,password:a.state.password}).then(function(e){e.data.isUserLoggin?(c.b.info("redirecting to your profile"),a.props.history.push("/users",{some:"state"})):c.b.error("username or password is wrong")}).catch(function(e){return console.log(e)})},a.loginSession=function(){C.loginSession().then(function(e){console.log(e.data),"Yes"===e.data.isSuccess?(c.b.info("You are logged in... !"),a.props.history.push("/users",{some:"state"})):"No"===e.data.isSuccess&&c.b.info("Please Try To Login... !")}).catch(function(e){return console.log(e)})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loginSession()}},{key:"render",value:function(){return l.a.createElement(y,{fluid:!0},l.a.createElement(N,null,l.a.createElement(I,{size:"md-12 sm-12"},l.a.createElement(I,{size:"md-12"},l.a.createElement("h1",{className:"text-center"},"Login"),l.a.createElement("h3",{style:{color:"red"}})))),l.a.createElement(N,null,l.a.createElement(I,{size:"md-4"}),l.a.createElement(O,{size:"md-4"},l.a.createElement("form",null,l.a.createElement("label",null,"Email:"),l.a.createElement(b,{onChange:this.handleInputChange,name:"email",placeholder:"johnwick@site.com (required)"}),l.a.createElement("label",null,"Password:"),l.a.createElement(b,{onChange:this.handleInputChange,name:"password",type:"password",placeholder:"***** (required)"}),l.a.createElement("hr",null),l.a.createElement(S,{onClick:this.handleFormSubmit},"Login"))),l.a.createElement(I,{size:"md-4"})),l.a.createElement(N,null,l.a.createElement(I,{size:"md-12"},l.a.createElement("div",{className:"spacer"}))))}}]),t}(n.Component);a(79);var R=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top navbar-light bg-light bg-navBar"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav",id:"category-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/roles"},"Departments/Roles")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/services"},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/clients"},"Clients")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/users"},"Users")))))},D=a(28),w=a(88),x=a(92),U=a(89),L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={roleName:"",updateRoleName:"",updateRoleDesc:""},a.getAllRoles=function(){C.getAllRoles().then(function(e){a.setState({allRoles:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator")})},a.handleFormSubmit=function(e){e.preventDefault(),C.NewRol({name:a.state.roleName,description:a.state.roleDesc}).then(function(e){c.b.success("New role added!"),a.getAllRoles(),a.resetFeilds()}).catch(function(e){return c.b.error("There is an error. Please contact adminstrator")})},a.deleteRole=function(e){var t={id:e};C.deleteRole({data:t}).then(function(e){c.b.success("Role Deleted!"),a.getAllRoles()}).catch(function(e){return c.b.error("There is an error. Please contact adminstrator")})},a.getOneRole=function(e){C.getOneRole({id:e}).then(function(e){c.b.success("Please updae the information below"),a.setState({getOneRole:e.data}),document.getElementById("popupUpdate").style.display="block"}).catch(function(e){return c.b.error("There is an error. Please contact adminstrator")})},a.updateOneRole=function(e){C.updateOneRole({id:e,name:a.state.updateRoleName,description:a.state.updateRoleDesc}).then(function(e){c.b.success("The role updated"),a.getAllRoles(),a.resetFeilds()}).catch(function(e){return c.b.error("There is an error. Please contact adminstrator")})},a.handleTextChange=function(e){a.setState({roleDesc:e.target.value})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.resetFeilds=function(){a.setState({roleDesc:"",roleName:"",updateRoleName:"",updateRoleDesc:""})},a.closeButton=function(){document.getElementById("popupUpdate").style.display="none",c.b.error("Update box closed")},a.state={roleDesc:"",allRoles:[],getOneRole:[]},a.handleTextChange=a.handleTextChange.bind(Object(D.a)(Object(D.a)(a))),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getAllRoles()}},{key:"render",value:function(){var e=this;return l.a.createElement(y,null,l.a.createElement(N,null,l.a.createElement(I,{size:"md-12"},l.a.createElement("h2",{className:"text-center"},"Department List")),l.a.createElement(I,{size:"md-12"},l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"Role Name"),l.a.createElement("td",null,"Role Description"),l.a.createElement("td",null,"Edit"),l.a.createElement("td",null,"Delele"))),this.state.allRoles.length?l.a.createElement("tbody",null,this.state.allRoles.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",{name:"roleId"},t.id),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.description),l.a.createElement("td",{className:"text-center"},l.a.createElement(x.a,{onClick:function(){return e.getOneRole(t.id)},variant:"primary"},"Edit")),l.a.createElement("td",{className:"text-center"},l.a.createElement(x.a,{onClick:function(){return e.deleteRole(t.id)},variant:"danger"},"Delete")))})):l.a.createElement("h3",null,"Loading...")))),l.a.createElement("hr",null),l.a.createElement(N,null,l.a.createElement(I,{size:"md-6"},l.a.createElement(U.a.Dialog,{id:"popupUpdate"},l.a.createElement(U.a.Header,{closeButton:!0,onClick:function(){return e.closeButton()}},l.a.createElement(U.a.Title,null,"Update Role")),l.a.createElement(U.a.Body,null,l.a.createElement("p",null,"Please update the information below and save.")),l.a.createElement(U.a.Footer,null,l.a.createElement(N,null,l.a.createElement(I,{size:"md-6"},l.a.createElement("input",{onChange:this.handleInputChange,name:"updateRoleName",placeholder:this.state.getOneRole.name})),l.a.createElement(I,{size:"md-6"},l.a.createElement("input",{onChange:this.handleInputChange,name:"updateRoleDesc",placeholder:this.state.getOneRole.description}))),l.a.createElement(N,null,l.a.createElement(I,{size:"md-12"},l.a.createElement(x.a,{onClick:function(){return e.updateOneRole(e.state.getOneRole.id)},variant:"primary"},"Save changes")))))),l.a.createElement(I,{size:"md-6"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",name:"roleName",onChange:this.handleInputChange,value:this.state.roleName,placeholder:"Marketing or Development (required)"}),l.a.createElement("textarea",{name:"roleDesc",className:"form-control",onChange:this.handleTextChange})),l.a.createElement(S,{onClick:this.handleFormSubmit},"Post")))))}}]),t}(n.Component),k=a(49),G=a(90),P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={serviceName:"",serviceDescription:"",subId:"",updateServiceName:"",UpdateSubId:"",updateserviceDescription:"",customerId:"",DeparmentId:"",allServices:[],oneService:[],resOneServ:[],resParent:[],allCustomers:[],allDeparments:[],servicesToCustomer:[]},a.getAllServices=function(){C.getAllServices().then(function(e){a.setState({allServices:e.data}),console.log(a.state.allServices)}).catch(function(e){return c.b.error("There is an error. Please contact administrator. (Get ALL Service)")})},a.saveNewService=function(e){e.preventDefault(),C.saveNewService({serviceName:a.state.serviceName,serviceDescription:a.state.serviceDescription,subId:a.state.subId}).then(function(e){a.serviceMenu(),c.b.success("Menu added!"),window.location.reload(!1)}).catch(function(e){return c.b.error("There is an error. Please contact administrator (on Saving)")})},a.deleteService=function(e){C.deleteService({data:{deleleServiceId:e}}).then(function(e){c.b.success("The Item deleted successfully!")}).catch(function(e){return c.b.error("There is an error. Please contact administrator (on Deleteing)")})},a.getOneServiceInfo=function(e){a.closeButton(),C.getOneServiceInfo({id:e}).then(function(e){a.setState({resOneServ:e.data.resOneServ}),e.data.resParent?a.setState({resParent:e.data.resParent}):a.setState({resParent:{serviceName:"Parent",id:"0"}})}).catch(function(e){return c.b.error("There is an error. Please contact administrator (on Get One Info for Editing)")})},a.getAllCustomers=function(){C.getAllCustomers().then(function(e){a.setState({allCustomers:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator (Getting All Customers)")})},a.getAllDeparments=function(){C.getAllDeparments().then(function(e){a.setState({allDeparments:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator (Getting All Departmnets)")})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.serviceMenu=function(){return l.a.createElement("ol",null,a.state.allServices.map(function(e){if(0===e.subId)return l.a.createElement("li",{key:e.id},e.serviceName,l.a.createElement("a",{className:"customEditButton",href:"#",onClick:function(){return a.getOneServiceInfo(e.id)}},"Edit"),l.a.createElement("a",{className:"customDeleteButton",href:"#",onClick:function(){return a.deleteService(e.id)}},"Delete"),a.subMenuMain(e.id))}))},a.subMenuMain=function(e){return a.state.allServices.filter(function(t){return t.subId===e}).map(function(e){return l.a.createElement("ul",null," ",l.a.createElement("li",{key:e.id},e.serviceName,l.a.createElement("a",{className:"customEditButton",href:"#",onClick:function(){return a.getOneServiceInfo(e.id)}},"Edit"),l.a.createElement("a",{className:"customDeleteButton",href:"#",onClick:function(){return a.deleteService(e.id)}},"Delete"),a.subMenuMain(e.id)))})},a.updateOneService=function(e){C.updateOneService({id:e,serviceName:a.state.updateServiceName,subId:a.state.UpdateSubId,serviceDescription:a.state.updateserviceDescription}).then(function(e){c.b.success("service updated"),a.closeButton()}).catch(function(e){return c.b.error("There is an error. Please contact administrator (update service)")})},a.assignAllServiceToClient=function(){C.assignAllServiceToClient({customerId:a.state.customerId,allServices:a.state.allServices,DeparmentId:a.state.DeparmentId}).then(function(e){c.b.success("All services assing to the client successfully")}).catch(function(e){return c.b.error("There is an error. Please contact administrator (Assign services to the customer)")})},a.closeButton=function(){var e=document.getElementById("popupUpdate");"none"===e.style.display?e.style.display="block":e.style.display="none"},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getAllServices(),this.getAllCustomers(),this.getAllDeparments()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"topSpacing"},l.a.createElement(y,null,l.a.createElement(N,null,l.a.createElement(U.a.Dialog,{className:"editFormCustomClass",id:"popupUpdate"},l.a.createElement(U.a.Header,{closeButton:!0,onClick:function(){return e.closeButton()}},l.a.createElement(U.a.Title,null,"Update selected service")),l.a.createElement(U.a.Body,null,l.a.createElement("p",null,"Please update the information below and save.")),l.a.createElement(U.a.Footer,null,l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-6"},l.a.createElement(G.a.Label,null,"Service Name"),l.a.createElement("input",{onChange:this.handleInputChange,name:"updateServiceName",placeholder:this.state.resOneServ.serviceName})),l.a.createElement(k.a,{size:"md-6"},l.a.createElement(G.a.Label,null,"Sub Service of"),this.state.allServices.length?l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"UpdateSubId"},l.a.createElement("option",{value:this.state.resParent.id},this.state.resParent.serviceName),l.a.createElement("option",null,"Choose..."),this.state.allServices.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.id," - ",e.serviceName," - ",e.subId)})):l.a.createElement("h3",null,"Loading Services..."),l.a.createElement(G.a.Label,null,"Service Description"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"updateserviceDescription",placeholder:this.state.resOneServ.serviceDescription,as:"textarea",rows:"1"}))),l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement(x.a,{onClick:function(){return e.updateOneService(e.state.resOneServ.id)},variant:"primary"},"Save changes")))))),l.a.createElement(N,null,l.a.createElement(k.a,{siz:"md-12"},l.a.createElement("h2",{className:"text-center"},"Add Services"))),l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement(G.a,null,l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Service Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,type:"text",name:"serviceName"})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Sub Service of"),this.state.allServices.length?l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"subId"},l.a.createElement("option",null,"Choose..."),this.state.allServices.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.id," - ",e.serviceName," - ",e.subId)})):l.a.createElement("h3",null,"Loading Services...")),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Service Description"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"serviceDescription",as:"textarea",rows:"1"})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(x.a,{onClick:this.saveNewService,variant:"primary",type:"submit"},"Save")))))),l.a.createElement("hr",null),l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement("h2",{className:"text-center"},"Here are the services"),this.serviceMenu())),l.a.createElement("hr",null),l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement("h2",{className:"text-center"}," Set up services to a client"),l.a.createElement(G.a.Row,null,this.state.allCustomers.length?l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"customerId"},l.a.createElement("option",null,"Choose the customer..."),this.state.allCustomers.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.fName," - ",e.lName)})):l.a.createElement("h3",null,"Loading"),l.a.createElement("br",null),l.a.createElement("br",null),this.state.allDeparments.length?l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"DeparmentId"},l.a.createElement("option",null,"Choose the deparment..."),this.state.allDeparments.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.fName," - ",e.lName)})):l.a.createElement("h3",null,"Loading"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{onClick:this.assignAllServiceToClient,variant:"primary",type:"submit"},"Assign All the services to the selected client"))))))}}]),t}(n.Component),T=a(37),j=a.n(T),M=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={fName:"",lName:"",address:"",addressUnit:"",addressCity:"",addressState:"",addressZip:"",email:"",phone:"",companyName:"",description:"",logo:"",password:"",role:"",allRoles:[],allUsers:[],getOneUser:[]},a.saveNewUser=function(e){e.preventDefault(),C.saveNewUser({fName:a.state.fName,lName:a.state.lName,address:a.state.address,addressUnit:a.state.addressUnit,addressCity:a.state.addressCity,addressState:a.state.addressState,addressZip:a.state.addressZip,email:a.state.email,phone:a.state.phone,companyName:a.state.companyName,description:a.state.description,logo:"",password:a.state.password,roleId:a.state.role,userId:""}).then(function(e){c.b.success("User created successfully"),a.resetAll()}).catch(function(e){return c.b.error("There is an error. Please contact adminstrator")})},a.getAllUsers=function(){C.getAllUsers().then(function(e){a.setState({allUsers:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator")})},a.getAllRoles=function(){C.getAllRoles().then(function(e){a.setState({allRoles:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator")})},a.getOneUser=function(e){C.getOneUser({id:e}).then(function(e){a.setState({getOneUser:e.data}),c.b.success("update selected user"),a.closeButton()}).catch(function(e){return c.b.error("There is an error. Please contact administrator. (getting one user)")})},a.updateOne=function(e){a.setState({fName:a.state.fName}),console.log(a.state)},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.closeButton=function(){var e=document.getElementById("popupUpdate");"none"===e.style.display?e.style.display="block":e.style.display="none"},a.resetAll=function(){a.setState({fName:"",lName:"",address:"",addressUnit:"",addressCity:"",addressState:"",addressZip:"",email:"",phone:"",companyName:"",description:"",logo:"",password:"",role:"",allRoles:[],allUsers:[],getOneUser:[]})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getAllRoles(),this.getAllUsers(),this.resetAll()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"topSpacing"},l.a.createElement(y,null,l.a.createElement(G.a,null,l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridFname"},l.a.createElement(G.a.Label,null,"First Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"fName",type:"text",placeholder:"Example: John"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridLname"},l.a.createElement(G.a.Label,null,"Last Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"lName",type:"text",placeholder:"Example: Wick"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridEmail"},l.a.createElement(G.a.Label,null,"Email"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"email",type:"email",placeholder:"Enter email"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridPassword"},l.a.createElement(G.a.Label,null,"Password"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"password",type:"password",placeholder:"Password"}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridPhone"},l.a.createElement(G.a.Label,null,"Phone"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"phone",type:"tel",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"xxxxxxxxxx"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridCompanyName"},l.a.createElement(G.a.Label,null,"Company Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"companyName",type:"text",placeholder:"Example: Google"}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridAddress1"},l.a.createElement(G.a.Label,null,"Address"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"address",placeholder:"1234 Main St"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridAddress2"},l.a.createElement(G.a.Label,null,"Address 2"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressUnit",placeholder:"Apartment, studio, or floor"}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridCity"},l.a.createElement(G.a.Label,null,"City"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressCity",type:"text",placeholder:"Example: Los Angeles"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridState"},l.a.createElement(G.a.Label,null,"State"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressState",type:"text",placeholder:"Example: CA"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridZip"},l.a.createElement(G.a.Label,null,"Zip"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressZip",type:"text",placeholder:"Example: 90001"}))),l.a.createElement(G.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(G.a.Label,null,"Comment or Description"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"description",as:"textarea",rows:"3"})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridRole"},l.a.createElement(G.a.Label,null,"Role"),this.state.allRoles.length?l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"role"},l.a.createElement("option",null,"Choose..."),this.state.allRoles.map(function(e){return l.a.createElement("option",{value:e.id},e.name)})):l.a.createElement("h3",null)),l.a.createElement(x.a,{onClick:this.saveNewUser,variant:"primary",type:"submit"},"Submit"))),l.a.createElement("hr",null),l.a.createElement(y,{fluid:!0},l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement("h2",{className:"text-center"},"User Lists"))),l.a.createElement("div",{id:"popupUpdate"},l.a.createElement(U.a.Dialog,{className:"editFormCustomClass"},l.a.createElement(U.a.Header,{closeButton:!0,onClick:function(){return e.closeButton()}},l.a.createElement(U.a.Title,null,"Update selected user")),l.a.createElement(U.a.Body,null,l.a.createElement("p",null,"Please update the information below and save."),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"First Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"fName",type:"text",defaultValue:this.state.getOneUser.fName})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Last Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"lName",type:"text",placeholder:this.state.getOneUser.lName}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Email"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"email",type:"text",placeholder:this.state.getOneUser.email})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Phone"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"phone",type:"text",placeholder:this.state.getOneUser.phone}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Company Name"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"companyName",type:"text",placeholder:this.state.getOneUser.companyName})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Address"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"phone",type:"text",placeholder:this.state.getOneUser.address}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Address Unit"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressUnit",type:"text",placeholder:this.state.getOneUser.addressUnit})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"City"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressCity",type:"text",placeholder:this.state.getOneUser.addressCity})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"State"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressState",type:"text",placeholder:this.state.getOneUser.addressState})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Zip"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"addressZip",type:"text",placeholder:this.state.getOneUser.addressZip}))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"Logo"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"logo",type:"text",placeholder:this.state.getOneUser.logo})),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,null,"New Password"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"password",type:"password",placeholder:this.state.getOneUser.password})),l.a.createElement(G.a.Group,{as:k.a,controlId:"formGridRole"},l.a.createElement(G.a.Label,null,"Role"),this.state.allRoles.length?l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"role"},l.a.createElement("option",null,"Choose..."),this.state.allRoles.map(function(e){return l.a.createElement("option",{value:e.id},e.name)})):l.a.createElement("h3",null))),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(G.a.Label,null,"Comment or Description"),l.a.createElement(G.a.Control,{onChange:this.handleInputChange,name:"description",as:"textarea",rows:"3"})))),l.a.createElement(U.a.Footer,null,l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement(x.a,{onClick:function(){return e.updateOne(e.state.getOneUser.id)},variant:"primary"},"Save changes")))))),l.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"Full Name"),l.a.createElement("td",null,"Email"),l.a.createElement("td",null,"Phone"),l.a.createElement("td",null,"Address"),l.a.createElement("td",null,"Company Name"),l.a.createElement("td",null,"Role"),l.a.createElement("td",null,"Created Date"),l.a.createElement("td",null,"Updated Date"),l.a.createElement("td",null,"Description"),l.a.createElement("td",null,"Edit"),l.a.createElement("td",null,"Delele"))),this.state.allUsers.length?l.a.createElement("tbody",null,this.state.allUsers.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",{name:"roleId"},t.id),l.a.createElement("td",null,t.fName," ",t.lName),l.a.createElement("td",null,t.email," "),l.a.createElement("td",null,t.phone," "),l.a.createElement("td",null,t.address,", ",t.addressUnit,", ",t.addressCity,", ",t.addressState," ",t.addressZip),l.a.createElement("td",null,t.companyName),l.a.createElement("td",null,t.Role.name),l.a.createElement("td",null,l.a.createElement(j.a,{format:"MM/DD/YYYY HH:mm",date:t.createdAt})),l.a.createElement("td",null,l.a.createElement(j.a,{format:"MM/DD/YYYY HH:mm",date:t.updatedAt})),l.a.createElement("td",null,t.description),l.a.createElement("td",{className:"text-center"},l.a.createElement(x.a,{onClick:function(){return e.getOneUser(t.id)},variant:"primary"},"Edit")),l.a.createElement("td",{className:"text-center"},l.a.createElement(x.a,{onClick:function(){return e.deleteUser(t.id)},variant:"danger"},"Delete")))})):l.a.createElement("h3",null,"Loading..."))))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={allCustomers:[],allServicesClient:[],subSingleMenu:[],customerId:null,status:[{value:"0",label:"Not Activated"},{value:"1",label:"Waiting on Client"},{value:"2",label:"Completed"},{value:"3",label:"Canceled"}],updateStatus:"",updateEmployee:"",getOneEmployee:[],getAllEmployees:[]},a.getAllDeparments=function(){C.getAllDeparments({}).then(function(e){a.setState({getAllEmployees:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator (getting all departments)")})},a.getEmployee=function(e,t){return a.state.getAllEmployees.filter(function(t){return t.id===e}).map(function(n){return l.a.createElement(G.a.Control,{onChange:function(e){return a.updateAsseignedEmoloyee(e,t)},as:"select",name:"updateEmployee"},l.a.createElement("option",{value:n.id},n.fName," ",n.lName," - ",n.Role.name),a.getAllEmployeesoptions(e))})},a.getAllEmployeesoptions=function(e){return a.state.getAllEmployees.filter(function(t){return t.id!==e}).map(function(e){return l.a.createElement("option",{value:e.id},e.fName," ",e.lName," - ",e.Role.name)})},a.updateAsseignedEmoloyee=function(e,t){var n=e.target,l=n.name,r=n.value;a.setState(Object(m.a)({},l,r),function(){return a.updateAsseignedEmoloyeeAPI(t)})},a.updateAsseignedEmoloyeeAPI=function(e){C.updateEmployee({id:e,employeeId:a.state.updateEmployee}).then(function(e){c.b.success("Assinged Employeed updated successfully!")}).catch(function(e){return c.b.error("There is an error. Please contact administrator (updating assigned employee)")})},a.getAllServiceCustomers=function(){C.getAllServiceCustomers().then(function(e){a.setState({allCustomers:e.data})}).catch(function(e){c.b.error("There is an error. Please contact administrator (Getting All Customers)")})},a.serviceClient=function(){a.setState({allServicesClient:""}),C.serviceClient({clientId:a.state.customerId}).then(function(e){a.setState({allServicesClient:e.data})}).catch(function(e){return c.b.error("There is an error. Please contact administrator (Getting Services for the selected service)")})},a.updateStatus=function(e,t){var n=e.target,l=n.name,r=n.value;a.setState(Object(m.a)({},l,r),function(){return a.updateRealStatus(t)})},a.updateRealStatus=function(e){0===a.state.updateStatus||null===a.state.updateStatus?c.b.error("Please select an update"):C.updateStatus({id:e,content:a.state.updateStatus}).then(function(e){c.b.success("The Status updated successfully")}).catch(function(e){return c.b.error("There is an error. Please contact administrator (Updating status)")})},a.selectFunction=function(e){return 0===e?l.a.createElement("option",{className:"notActive",value:"0"},"Not Activate"):1===e?l.a.createElement("option",{className:"waiting",value:"1"},"Waiting on Client"):2===e?l.a.createElement("option",{className:"completed",value:"2"},"Completed"):3===e?l.a.createElement("option",{className:"canceled",value:"3"},"Canceled"):l.a.createElement("option",null,"Select...")},a.serviceMenu=function(){return l.a.createElement("ol",null,a.state.allServicesClient.map(function(e){if(0===e.Service.subId)return l.a.createElement("li",{key:e.id},e.Service.serviceName,l.a.createElement(G.a,null,l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,{className:"serviceTitle"},"Status"),l.a.createElement(G.a.Control,{onChange:function(t){return a.updateStatus(t,e.id)},as:"select",name:"updateStatus"},a.selectFunction(e.status),l.a.createElement("option",{className:"notActive",value:"0"},"Not Activate"),l.a.createElement("option",{className:"waiting",value:"1"},"Waiting on Client"),l.a.createElement("option",{className:"completed",value:"2"},"Completed"),l.a.createElement("option",{className:"canceled",value:"3"},"Canceled"))),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,{className:"serviceTitle"},"Assigned Employee"),a.getEmployee(e.employeeId,e.id)))),a.subMenuMain(e.ServiceId))}))},a.subMenuMain=function(e){return a.state.allServicesClient.filter(function(t){return t.Service.subId===e}).map(function(e){return l.a.createElement("ul",null,l.a.createElement("li",{key:e.id},e.Service.serviceName,l.a.createElement(G.a,null,l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Control,{onChange:function(t){return a.updateStatus(t,e.id)},as:"select",name:"updateStatus"},a.selectFunction(e.status),l.a.createElement("option",{className:"notActive",value:"0"},"Not Activate"),l.a.createElement("option",{className:"waiting",value:"1"},"Waiting on Client"),l.a.createElement("option",{className:"completed",value:"2"},"Completed"),l.a.createElement("option",{className:"canceled",value:"3"},"Canceled"))),l.a.createElement(G.a.Group,{as:k.a},l.a.createElement(G.a.Label,{className:"serviceTitle"},"Assigned Employee"),a.getEmployee(e.employeeId,e.id)))),a.subMenuMain(e.ServiceId)))})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getAllServiceCustomers(),this.getAllDeparments()}},{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement("h2",{className:"text-center"}," Set up services to a client"),l.a.createElement(G.a.Row,null,l.a.createElement(G.a.Control,{onChange:this.handleInputChange,as:"select",name:"customerId"},l.a.createElement("option",null,"Choose..."),this.state.allCustomers.map(function(e){return l.a.createElement("option",{key:e.clientId,value:e.clientId},e.User.fName," - ",e.User.lName," - ",e.User.companyName)})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{onClick:this.serviceClient,variant:"primary",type:"submit"},"Search")))),l.a.createElement("hr",null),l.a.createElement(N,null,l.a.createElement(k.a,{size:"md-12"},l.a.createElement("h2",{className:"text-center"},"Here are the services"),this.state.allServicesClient.length>null?this.serviceMenu():l.a.createElement("p",null,"Please choose a client to see the services"))))}}]),t}(n.Component),B=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement(N,null,l.a.createElement(I,{size:"md-12"},l.a.createElement("h1",{className:"text-center"},"Are you lost?!")))}}]),t}(n.Component);var F=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(R,null),l.a.createElement(c.a,null),l.a.createElement(i.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:A}),l.a.createElement(u.a,{exact:!0,path:"/roles",component:L}),l.a.createElement(u.a,{exact:!0,path:"/users",component:M}),l.a.createElement(u.a,{exact:!0,path:"/clients",component:z}),l.a.createElement(u.a,{exact:!0,path:"/services",component:P}),l.a.createElement(u.a,{component:B}))))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.392b8091.chunk.js.map