(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},115:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(32),i=a.n(l),s=a(11),c=a(4),o=a(6),u=a(7),m=a(10),p=a(8),E=a(9),d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},this.props.children)}}]),t}(r.Component),h=a(2),b=a(39);function f(e,t,a,r){return Object(b.a)(t,{headers:{Accept:"application/json","Content-Type":"application/json","x-auth-token":r},method:e,mode:"CORS",body:JSON.stringify(a)})}var g={createUser:function(e){return f("POST","https://mchnews.herokuapp.com/api/users",e)},login:function(e,t){return f("POST","https://mchnews.herokuapp.com/api/auth",e,t)}},O="CLEAR_FORM_ERRORS";function N(e){return e.split('"').join("")}var v=function(){return{type:"LOADING_CONTENT"}},j=function(e){return{type:"SIGN_UP_SUCCESS",user:e}},S=function(e){return{type:"SIGN_UP_ERROR",error:e}},y=function(e){return{type:"LOGIN_SUCCESS",token:e}},w=function(e){return{type:"LOGIN_ERROR",error:e}},U=function(){return{type:"LOG_OUT_SUCCESS"}};function A(){return function(e){return e({type:O})}}a(60);var C=a(12),L=a.n(C),R=function(e){function t(e,a){var r;return Object(o.a)(this,t),(r=Object(m.a)(this,Object(p.a)(t).call(this,e,a))).loginUser=function(e){e.preventDefault(),r.props.auth.loginError=null;var t={},a=new FormData(e.target),n=!0,l=!1,i=void 0;try{for(var s,c=a.entries()[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var o=s.value;t[o[0]]=o[1]}}catch(u){l=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(l)throw i}}r.props.loginUser(t)},r.loginUser=r.loginUser.bind(Object(h.a)(Object(h.a)(r))),r}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.auth.user.token&&(window.location.hash="home")}},{key:"render",value:function(){return n.a.createElement("div",{className:"cont"},n.a.createElement("div",{id:"overlay"}),n.a.createElement("div",{className:"login-cont"},n.a.createElement("div",{className:"login-txt"},"Log In"),n.a.createElement("p",{className:"loginErr"},this.props.auth.loginError),n.a.createElement("form",{className:"loginFormContainer",onSubmit:this.loginUser},n.a.createElement("div",{className:"email-cont"},n.a.createElement("label",{className:"label-col"},"Email"),n.a.createElement("input",{className:"login-input transform-text",name:"email",type:"text"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"pwd-cont"},n.a.createElement("label",{className:"label-col"},"Password"),n.a.createElement("input",{className:"login-input",name:"password",type:"password"}),n.a.createElement("br",null)),n.a.createElement("button",{type:"submit",className:"login-sub"},this.props.auth.isLoading?n.a.createElement(L.a,{type:"Bars",color:"#fff",height:"30",width:"30"}):"Log In")),n.a.createElement("p",{className:"hve-acct"},"don't have an account? ",n.a.createElement(c.a,{to:"/",onClick:this.props.clearFormErrors,className:"signupLink"},"Sign Up"))))}}]),t}(r.Component),_=Object(s.b)(function(e){return{auth:e.auth}},{loginUser:function(e){return function(t){return t(v()),g.login(e).then(function(e){return e.json()}).then(function(e){e.errors?t(w(N(e.errors))):(localStorage.setItem("user-token",JSON.stringify(e.token)),t(y(e.token)))})}},clearFormErrors:A})(R),T={getArticles:function(){return f("GET","https://mchnews.herokuapp.com/api/articles")},getSingleArticle:function(e,t){return f("GET","https://mchnews.herokuapp.com/api/articles$/".concat(e),{},t)},postArticle:function(e,t){return f("POST","https://mchnews.herokuapp.com/api/articles",e,t)},editArticle:function(e,t,a){return f("PUT","https://mchnews.herokuapp.com/api/articles/".concat(e),t,a)},deleteArticle:function(e,t){return f("DELETE","https://mchnews.herokuapp.com/api/articles/".concat(e),{},t)}},k=function(e){return{type:"FETCH_ARTICLES_SUCCESS",articles:e}},I=function(e){return{type:"FETCH_ARTICLES_ERROR",error:e}},P=function(e){return{type:"POST_ARTICLE_ERROR",error:e}},D=function(e){return{type:"UNAUTHORIZED",error:e}},F=function(e){return{type:"UPDATE_ARTICLE_ERROR",error:e}},x=function(){return{type:"LOADING_CONTENT"}},G=function(){return{type:"LOADING_ARTICLES"}},W=function(){return{type:"EDIT_LOADING"}},H=function(){return{type:"DELETE_ARTICLE_LOADING"}};function B(){return function(e){return e(G()),T.getArticles().then(function(e){return e.json()}).then(function(t){t.errors?e(I(N(t.errors))):e(k(t.articles))})}}a(89);var M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).resetForm=function(e){e.reset()},a.createArticle=function(e){e.preventDefault(),a.props.articles.articlesError=null;var t=e.target,r={},n=new FormData(t),l=JSON.parse(localStorage.getItem("user-token")),i=!0,s=!1,c=void 0;try{for(var o,u=n.entries()[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var m=o.value;r[m[0]]=m[1]}}catch(p){s=!0,c=p}finally{try{i||null==u.return||u.return()}finally{if(s)throw c}}a.props.createArticle(r,l,function(){return a.resetForm(t)})},a.createArticle=a.createArticle.bind(Object(h.a)(Object(h.a)(a))),a.resetForm=a.resetForm.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"postArticles"},n.a.createElement("form",{className:"pst-article",onSubmit:this.createArticle},n.a.createElement("div",{className:"pst-art-title"},n.a.createElement("label",{className:"titleLb"},"Title: "),n.a.createElement("input",{className:"title",name:"title"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"pst-art-subheading"},n.a.createElement("label",{className:"subhLb"},"Sub-Heading: "),n.a.createElement("input",{className:"subheading",name:"subheading"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"pst-art-lparag"},n.a.createElement("label",{className:"paragLb"},"Lead Paragraph: "),n.a.createElement("textarea",{className:"leadParagraph",name:"leadParagraph"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"pst-art-body"},n.a.createElement("label",{className:"bodyLb"},"Body: "),n.a.createElement("textarea",{className:"body",name:"body"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"pst-art-imgUrl"},n.a.createElement("label",{className:"imgLb"},"Image Url: "),n.a.createElement("input",{name:"imageUrl",className:"img-url"}),n.a.createElement("br",null)),n.a.createElement("button",{className:"sub-art",type:"submit"},this.props.articles.isLoading?n.a.createElement(L.a,{type:"Bars",color:"#fff",height:"25",width:"30"}):"Submit Article")),n.a.createElement("p",{className:"err-msg"},this.props.articles.articlesError))}}]),t}(r.Component),J=Object(s.b)(function(e){return{articles:e.articles}},{createArticle:function(e,t,a){return function(r){return r(x()),T.postArticle(e,t).then(function(e){return e.json()}).then(function(e){e.errors?r(P(N(e.errors))):(r(B()),a())})}},clearFormErrors:A})(M),z=a(24),V=a.n(z),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).deleteArticle=function(){var e=JSON.parse(localStorage.getItem("user-token"));a.props.removeArticle(a.state.eventState,e),a.setState({showAlert:!1})},a.showAlert=function(e){a.setState({showAlert:!0,eventState:e.target.id})},a.hideAlert=function(){a.setState({showAlert:!1})},a.submitEdit=function(e){e.preventDefault();var t={},r=new FormData(e.target),n=JSON.parse(localStorage.getItem("user-token")),l=!0,i=!1,s=void 0;try{for(var c,o=r.entries()[Symbol.iterator]();!(l=(c=o.next()).done);l=!0){var u=c.value;t[u[0]]=u[1]}}catch(m){i=!0,s=m}finally{try{l||null==o.return||o.return()}finally{if(i)throw s}}a.props.updateArticle(e.target.id,t,n,function(){return a.changeEditMode()})},a.toggleArticle=function(){a.setState({isOpen:!a.state.isOpen})},a.changeEditMode=function(){a.setState({edit:!a.state.edit}),a.props.articles.isLoadingEditArticle=!1},a.state={edit:!1,isOpen:!1,showAlert:!1,eventState:null},a.toggleArticle=a.toggleArticle.bind(Object(h.a)(Object(h.a)(a))),a.changeEditMode=a.changeEditMode.bind(Object(h.a)(Object(h.a)(a))),a.submitEdit=a.submitEdit.bind(Object(h.a)(Object(h.a)(a))),a.deleteArticle=a.deleteArticle.bind(Object(h.a)(Object(h.a)(a))),a.showAlert=a.showAlert.bind(Object(h.a)(Object(h.a)(a))),a.showAlert=a.showAlert.bind(Object(h.a)(Object(h.a)(a))),a.hideAlert=a.hideAlert.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"renderEditMode",value:function(){var e=this.props.article,t=new Date(e.datePublished);return this.state.edit?n.a.createElement("form",{className:"articleForm-edit",id:e._id,onSubmit:this.submitEdit},n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"label"},"Title:"),n.a.createElement("input",{className:"input-col input-edit",name:"title",type:"text",defaultValue:e.title})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"label"},"Lead Paragraph:"),n.a.createElement("textarea",{className:"input-col",name:"leadParagraph",type:"text",defaultValue:e.leadParagraph})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"label"},"Sub-Heading:"),n.a.createElement("input",{className:"input-col input-edit",name:"subheading",type:"text",defaultValue:e.subheading})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"label"},"Body:"),n.a.createElement("textarea",{className:"input-col",name:"body",type:"text",defaultValue:e.body})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"label"},"Image Url:"),n.a.createElement("input",{className:"input-col input-edit",name:"imageUrl",type:"text",defaultValue:e.imageUrl})),n.a.createElement("button",{className:"article-save-btn",id:e._id,type:"submit"},this.props.articles.isLoadingEditArticle?n.a.createElement(L.a,{type:"Bars",color:"#fff",height:"25",width:"25"}):"Save"),n.a.createElement("button",{className:"article-cancel-btn",onClick:this.changeEditMode},"Cancel")):n.a.createElement("div",{className:"articleBody",key:e._id},n.a.createElement("h2",{className:"article-title"},e.title),n.a.createElement("p",null,e.leadParagraph),n.a.createElement("h3",null,e.subheading),n.a.createElement("p",null,e.body),n.a.createElement("p",{className:"author"},n.a.createElement("span",null,"Author: "),this.props.article.user?e.user.name:"anonymous"),n.a.createElement("p",{className:"date-published"},n.a.createElement("span",null,"Date Published: "),t.toTimeString()),n.a.createElement("button",{className:"article-delete-btn",onClick:this.showAlert,id:e._id},"Delete"),n.a.createElement("button",{className:"article-edit-btn",onClick:this.changeEditMode},"Edit"),n.a.createElement("button",{className:"article-close-btn",id:e._id,onClick:this.toggleArticle},"X"))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"initialArtDisplay"},this.state.isOpen?this.renderEditMode():n.a.createElement("p",{className:"art-lists-title"},this.props.article.title,n.a.createElement("span",{className:"readMore",onClick:this.toggleArticle}," read more...")),this.state.showAlert&&n.a.createElement(V.a,{danger:!0,showCancel:!0,confirmBtnText:"Yes, delete it!",confirmBtnCssClass:"delete",cancelBtnCssClass:"cancel",title:"Are you sure you want to delete this Article?",onConfirm:function(){return e.deleteArticle()},onCancel:function(){return e.hideAlert()},closeOnClickOutside:!0,customClass:"sweetAlert",focusConfirmBtn:!0},"You Will not be able to recover this Article"))}}]),t}(r.Component),X=Object(s.b)(function(e){return{articles:e.articles}})(Y),Z=a(40),$=a.n(Z),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).logOutUser=function(){a.props.logOutUser(),a.props.articles.isLoadingArticles=!1,a.props.articles.isLoading=!1},a.toggleAlert=function(){a.setState({toggle:!a.state.toggle})},a.state={toggle:null},a.logOutUser=a.logOutUser.bind(Object(h.a)(Object(h.a)(a))),a.toggleAlert=a.toggleAlert.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({toggle:e.articles.unauthorized}),e.articles.unauthorized=!1}},{key:"componentDidMount",value:function(){this.props.getArticles()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"articles"},n.a.createElement("header",{className:"homeHeader"},n.a.createElement("button",{className:"home-title"},"Home"),n.a.createElement(c.a,{to:"users"},"users"),n.a.createElement(c.a,{to:"writers"},"writers"),n.a.createElement(c.a,{to:"profile"},"profile"),n.a.createElement("img",{src:$.a,className:"logout",onClick:this.logOutUser,alt:"logout-icon",title:"logout"})),n.a.createElement("div",{className:"cont-art"},n.a.createElement("div",{className:"nav-head"},"Post Article "),n.a.createElement(J,null),n.a.createElement("span",{className:"loading"},this.props.articles.isLoadingArticles&&n.a.createElement(L.a,{type:"ThreeDots",color:"#121a42",height:"80",width:"80"})),this.props.articles.articles.map(function(t){return n.a.createElement(X,{article:t,key:t._id,updateArticle:e.props.updateArticle,removeArticle:e.props.removeArticle})}),this.state.toggle&&n.a.createElement(V.a,{danger:!0,title:"Sorry!",customClass:"unauthorized",onConfirm:function(){return e.toggleAlert()},confirmBtnCssClass:"cancel",closeOnClickOutside:!0},"You are not authorized to perform this action"),this.props.articles.isLoadingDelete&&n.a.createElement("span",{className:"deleteLoader"},n.a.createElement(L.a,{type:"Plane",color:"#121a42",height:"80",width:"80"}))))}}]),t}(r.Component),q=Object(s.b)(function(e){return{articles:e.articles}},{getArticles:B,logOutUser:function(){return localStorage.removeItem("user-token"),localStorage.getItem("user-token")||(window.location.hash="login"),function(e){e(U())}},removeArticle:function(e,t){return function(a){return a(H()),T.deleteArticle(e,t).then(function(e){"Unauthorized"===e.statusText?a(D(N(e.statusText))):a(B())})}},updateArticle:function(e,t,a,r){return function(n){return n(W()),T.editArticle(e,t,a).then(function(e){return e.json()}).then(function(e){e.errors?(n(F(N(e.errors))),r()):(n(B()),r())})}}})(Q),K={getUsers:function(){return f("GET","https://mchnews.herokuapp.com/api/users")},getUserProfile:function(e){return f("GET","https://mchnews.herokuapp.com/api/users/me",{},e)},editUser:function(e,t,a){return f("PUT","https://mchnews.herokuapp.com/api/users/".concat(e),t,a)},deleteUser:function(e,t){return f("DELETE","https://mchnews.herokuapp.com/api/users/".concat(e),{},t)}},ee=function(e){return{type:"FETCH_USERS_SUCCESS",users:e}},te=function(e){return{type:"FETCH_USERS_ERROR",error:e}},ae=function(e){return{type:"FETCH_USER_PROFILE_SUCCESS",user:e}},re=function(e){return{type:"FETCH_USER_PROFILE_ERROR",error:e}},ne=function(e){return{type:"UPDATE_USER_PROFILE_ERROR",error:e}},le=function(){return{type:"DELETE_USER_SUCCESS"}},ie=function(e){return{type:"DELETE_USER_ERROR",error:e}},se=function(){return{type:"USER_LOADING"}},ce=function(){return{type:"USER_PROFILE_LOADING"}},oe=function(){return{type:"USER_EDIT_PROFILE_LOADING"}};function ue(){return function(e){e(ce());var t=JSON.parse(localStorage.getItem("user-token"));return K.getUserProfile(t).then(function(e){return e.json()}).then(function(t){t.error?e(re(N(t.error))):e(ae(t.user))})}}a(105);var me=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("span",{className:"nav-head"},"Users"),this.props.usersList.map(function(e){return n.a.createElement("div",{className:"userBody",key:e._id},n.a.createElement("div",{className:"users"},n.a.createElement("label",{className:"users-label"},"Name: "),n.a.createElement("span",null,e.name)),n.a.createElement("div",{className:"users"},n.a.createElement("label",{className:"users-label"},"Email: "),n.a.createElement("span",null,e.email)),n.a.createElement("div",{className:"users"},n.a.createElement("label",{className:"users-label"},"Bio: "),n.a.createElement("span",null,e.bio)))}))}}]),t}(r.Component),pe=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){return n.a.createElement("div",{className:"userContainer"},n.a.createElement("header",{className:"homeHeader"},n.a.createElement("button",{className:"usr-title"},"Users"),n.a.createElement(c.a,{to:"home"},"Home"),n.a.createElement(c.a,{to:"writers"},"Writers"),n.a.createElement(c.a,{to:"profile"},"profile")),this.props.users.userLoading?n.a.createElement("span",{className:"loading"},n.a.createElement(L.a,{type:"ThreeDots",color:"#121a42",height:"80",width:"80"})):n.a.createElement(me,{usersList:this.props.users.users}))}}]),t}(r.Component),Ee=Object(s.b)(function(e){return{users:e.users}},{getUsers:function(){return function(e){return e(se()),K.getUsers().then(function(e){return e.json()}).then(function(t){t.errors?e(te(N(t.errors))):e(ee(t.users))})}}})(pe),de={getWriters:function(){return f("GET","https://mchnews.herokuapp.com/api/writers")},getSingleWriters:function(e,t){return f("GET","https://mchnews.herokuapp.com/api/writers/".concat(e))}},he=function(e){return{type:"FETCH_WRITERS_SUCCESS",writers:e}},be=function(e){return{type:"FETCH_WRITERS_ERROR",error:e}},fe=function(){return{type:"WRITERS_LOADING"}};var ge=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).toggleArticle=function(e){e.preventDefault(),a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a.toggleArticle=a.toggleArticle.bind(Object(h.a)(Object(h.a)(a))),a.showUserArticle=a.showUserArticle.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"showUserArticle",value:function(){return this.props.articles.map(function(e){return n.a.createElement("div",{key:e._id},n.a.createElement("h2",{className:"title-click"},e.title))})}},{key:"render",value:function(){return n.a.createElement("div",null,1===this.props.articles.length?n.a.createElement("p",{className:"art-count",onClick:this.toggleArticle},n.a.createElement("button",null,this.props.articles.length)," article"):n.a.createElement("p",{className:"art-count",onClick:this.toggleArticle},n.a.createElement("button",null,this.props.articles.length)," articles"),this.state.isOpen&&this.showUserArticle())}}]),t}(r.Component),Oe=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("span",{className:"nav-head"},"Writers"),this.props.writers.map(function(e){return n.a.createElement("div",{className:"writerBody",key:e._id},n.a.createElement("div",{className:"writers"},n.a.createElement("label",{className:"writer-label"},"Name: "),n.a.createElement("span",null,e.name)),n.a.createElement("div",{className:"writers"},n.a.createElement("label",{className:"writer-label"},"Email: "),n.a.createElement("span",null,e.email)),n.a.createElement("div",{className:"writers"},n.a.createElement("label",{className:"writer-label"},"Bio: "),n.a.createElement("span",null,e.bio)),n.a.createElement(ge,{articles:e.articles}))}))}}]),t}(r.Component),Ne=(a(107),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getWriters()}},{key:"render",value:function(){var e=this.props.writers.writers;return n.a.createElement("div",{className:"writer-cont"},n.a.createElement("header",{className:"homeHeader"},n.a.createElement("button",{className:"writr-title"},"Writers"),n.a.createElement(c.a,{to:"home"},"Home"),n.a.createElement(c.a,{to:"users"},"users"),n.a.createElement(c.a,{to:"profile"},"profile")),this.props.writers.isLoadingWriter?n.a.createElement("span",{className:"loading"},n.a.createElement(L.a,{type:"ThreeDots",color:"#121a42",height:"80",width:"80"})):n.a.createElement(Oe,{writers:e}))}}]),t}(r.Component)),ve=Object(s.b)(function(e){return{writers:e.writers}},{getWriters:function(){return function(e){return e(fe()),de.getWriters().then(function(e){return e.json()}).then(function(t){t.errors?e(be(N(t.errors))):e(he(t.writers))})}}})(Ne),je=(a(109),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).toggleEdit=function(){a.setState({edit:!a.state.edit}),a.props.users.updateUserError=null},a.submitEdit=function(e){e.preventDefault(),a.props.users.updateUserError=null;var t={},r=JSON.parse(localStorage.getItem("user-token")),n=new FormData(e.target),l=!0,i=!1,s=void 0;try{for(var c,o=n.entries()[Symbol.iterator]();!(l=(c=o.next()).done);l=!0){var u=c.value;t[u[0]]=u[1]}}catch(m){i=!0,s=m}finally{try{l||null==o.return||o.return()}finally{if(i)throw s}}a.props.updateUserProfile(e.target.id,t,r,function(){return a.toggleEdit()}),a.props.users.updateUserError=null},a.deleteAccount=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("user-token"));a.props.deleteUser(e.target.id,t),localStorage.removeItem("user-token")},a.state={edit:!1},a.toggleEdit=a.toggleEdit.bind(Object(h.a)(Object(h.a)(a))),a.submitEdit=a.submitEdit.bind(Object(h.a)(Object(h.a)(a))),a.deleteAccount=a.deleteAccount.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(){localStorage.getItem("user-token")||(window.location="/#/")}},{key:"render",value:function(){var e=this.props.users.userProfile;return n.a.createElement("div",null,n.a.createElement("span",{className:"nav-head"},"My Profile"),n.a.createElement("div",{className:"pf-btn"},n.a.createElement("button",{className:"edit-btn",onClick:this.toggleEdit},"Edit Profile"),n.a.createElement("button",{className:"delete-btn",id:e._id,onClick:this.deleteAccount},"Delete Account")),this.state.edit?n.a.createElement("form",{className:"profileFormEdit",onSubmit:this.submitEdit,id:"123454"},n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"prof-label"},"Name:"),n.a.createElement("input",{className:"input-col",name:"name",defaultValue:e.name,type:"text"})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"prof-label"},"Email:"),n.a.createElement("input",{className:"input-col",name:"email",defaultValue:e.email,type:"text"})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"prof-label"},"Bio:"),n.a.createElement("textarea",{className:"input-col",name:"bio",defaultValue:e.bio,type:"text"})),n.a.createElement("div",{className:"form-edit"},n.a.createElement("label",{className:"prof-label"},"Password:"),n.a.createElement("input",{className:"input-col",name:"password",type:"password"})),n.a.createElement("div",{className:"btn-wrap"},n.a.createElement("button",{className:"save-btn",id:e._id,type:"submit"},this.props.users.isLoadingProfileEdit?n.a.createElement(L.a,{type:"Bars",color:"#121a42",height:"20",width:"20"}):"save"),n.a.createElement("button",{className:"cancel-btn",onClick:this.toggleEdit},"cancel")),n.a.createElement("p",{className:"edit-err"},this.props.users.updateUserError)):n.a.createElement("div",{className:"profileBody",key:e._id},n.a.createElement("div",{className:"profiles-div"},n.a.createElement("label",{className:"profiles-label"},"Name: "),n.a.createElement("span",null,e.name)),n.a.createElement("div",{className:"profiles-div"},n.a.createElement("label",{className:"profiles-label"},"Email: "),n.a.createElement("span",null,e.email)),n.a.createElement("div",{className:"profiles-div"},n.a.createElement("label",{className:"profiles-label"},"Bio: "),n.a.createElement("span",null,e.bio))),n.a.createElement("div",null,n.a.createElement("h1",{className:"articlesHeader"},"MY ARTICLES"),e.articles&&0===e.articles.length?n.a.createElement("div",null,n.a.createElement("h1",{className:"no-art"},"You have not written any article")," "):n.a.createElement("div",null,e.articles&&e.articles.map(function(e){var t=new Date(e.datePublished);return n.a.createElement("div",{className:"profileArtBody",key:e._id},n.a.createElement("h2",null,e.title),n.a.createElement("p",null,e.leadParagraph),n.a.createElement("h3",null,e.subheading),n.a.createElement("p",null,e.body),n.a.createElement("p",{className:"date-published"},n.a.createElement("span",null,"Time Published: "),t.toTimeString()))}))))}}]),t}(r.Component)),Se=Object(s.b)(function(e){return{users:e.users}},{updateUserProfile:function(e,t,a,r){return function(n){return n(oe()),K.editUser(e,t,a).then(function(e){return e.json()}).then(function(e){e.errors?n(ne(N(e.errors))):(n(ue()),r())})}},deleteUser:function(e,t){return function(a){return K.deleteUser(e,t).then(function(e){"No Content"===e.statusText?a(ie(N(e.statusText))):a(le)})}}})(je),ye=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserProfile()}},{key:"render",value:function(){return n.a.createElement("div",{className:"pf-cont"},n.a.createElement("header",{className:"homeHeader"},n.a.createElement("button",{className:"profile-title"},"Profile"),n.a.createElement(c.a,{to:"home"},"Home"),n.a.createElement(c.a,{to:"writers"},"Writers"),n.a.createElement(c.a,{to:"users"},"Users")),this.props.users.isLoadingProfile?n.a.createElement("span",{className:"loading"},n.a.createElement(L.a,{type:"ThreeDots",color:"#121a42",height:"80",width:"80"})):n.a.createElement(Se,null))}}]),t}(r.Component),we=Object(s.b)(function(e){return{users:e.users}},{getUserProfile:ue})(ye),Ue=(a(111),a(115),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).resetForm=function(e){e.reset()},a.signUpUser=function(e){e.preventDefault(),a.props.auth.signUpError=null;var t={},r=e.target,n=new FormData(r),l=!0,i=!1,s=void 0;try{for(var c,o=n.entries()[Symbol.iterator]();!(l=(c=o.next()).done);l=!0){var u=c.value;t[u[0]]=u[1]}}catch(m){i=!0,s=m}finally{try{l||null==o.return||o.return()}finally{if(i)throw s}}a.props.signUpUser(t,function(){return a.resetForm(r)})},a.signUpUser=a.signUpUser.bind(Object(h.a)(Object(h.a)(a))),a.resetForm=a.resetForm.bind(Object(h.a)(Object(h.a)(a))),a.closeModal=a.closeModal.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"closeModal",value:function(){this.props.clearFormErrors(),this.props.closeComponent()}},{key:"render",value:function(){return n.a.createElement("div",{className:"signUp"},n.a.createElement("div",{className:"signup-txt"},"Sign Up"),this.props.auth.signUpSuccess&&n.a.createElement("p",{className:"succ-msg"},"Account successfully created"),n.a.createElement("p",{className:"err-msg"},this.props.auth.signUpError),n.a.createElement("form",{className:"signupFormContainer",onSubmit:this.signUpUser},n.a.createElement("button",{className:"topright",onClick:this.closeModal},"X"),n.a.createElement("div",{className:"nameContainer"},n.a.createElement("label",null,"Name"),n.a.createElement("input",{className:"signup-input",name:"name",type:"text"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"emailContainer"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{className:"signup-input transform-text",name:"email",type:"text"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"passwordContainer"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{className:"signup-input",name:"password",type:"password"}),n.a.createElement("br",null)),n.a.createElement("div",{className:"bioContainer"},n.a.createElement("label",null,"Bio"),n.a.createElement("textarea",{className:"signup-input",name:"bio",type:"text"}),n.a.createElement("br",null)),n.a.createElement("button",{className:"signup-Submit",type:"submit"},this.props.auth.isLoading?n.a.createElement(L.a,{type:"Bars",color:"#fff",height:"30",width:"30"}):"Sign Up")),n.a.createElement("p",{className:"hve-acc"},"Already have an account? ",n.a.createElement(c.a,{to:"login",className:"loginLink"},"Log in")))}}]),t}(r.Component)),Ae=Object(s.b)(function(e){return{auth:e.auth}},{signUpUser:function(e,t){return function(a){return a(v()),g.createUser(e).then(function(e){return e.json()}).then(function(e){e.errors?a(S(N(e.errors))):(a(j(e.user)),t())})}},clearFormErrors:A})(Ue),Ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).openComponent=function(){a.setState({isOpen:!0})},a.closeComponent=function(){a.setState({isOpen:!1})},a.state={isOpen:!1},a.openComponent=a.openComponent.bind(Object(h.a)(Object(h.a)(a))),a.closeComponent=a.closeComponent.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("header",null,n.a.createElement("div",{className:"logo"},"Mchardex::"),n.a.createElement("div",{className:"getstarted"},"get started ",n.a.createElement(c.a,{to:"login",className:"loginLink"},"log in"))),n.a.createElement("div",{className:"section1"},n.a.createElement("div",{className:"sectionContent"},n.a.createElement("p",{className:"move"},"Move Work Forward"),n.a.createElement("p",{className:"create"},"create as many articles as you can"),n.a.createElement("p",{className:"create"},"become a writer"),n.a.createElement("p",{className:"move"},"get new exiciting features"),n.a.createElement("button",{className:"create-acc",onClick:this.openComponent},"create an account now"))),this.state.isOpen&&n.a.createElement(Ae,{closeComponent:this.closeComponent}),n.a.createElement("footer",null,n.a.createElement("span",{className:"footerText"},"become the face of ",n.a.createElement("span",{className:"foot-logo"}," Mchardex:: ")," by writing exciting articles")))}}]),t}(r.Component),Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Re(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _e=a(18),Te=a(41),ke=a(3),Ie={user:{},loginError:null,signUpError:null,signUpSuccess:!1,isLoading:!1},Pe={articles:[],articlesError:null,postArticleSuccess:!1,deleteArticleError:null,updateArticleError:null,unauthorized:!1,isLoading:!1,isLoadingArticles:!1,isLoadingEditArticle:!1,isLoadingDelete:!1},De={users:[],userProfile:{},getUsersError:null,getUserProfileError:null,updateUserError:null,deleteUserError:null,userLoading:!1,isLoadingProfile:!1,isLoadingProfileEdit:!1},Fe={writers:[],writersError:null,isLoadingWriter:!1},xe=Object(_e.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_UP_SUCCESS":return Object(ke.a)({},e,{user:t.user,signUpSuccess:!0,signUpError:!1,isLoading:!1});case"SIGN_UP_ERROR":return Object(ke.a)({},e,{signUpError:t.error,isLoading:!1});case"LOGIN_SUCCESS":return Object(ke.a)({},e,{user:{token:t.token},loginError:!1,isLoading:!1});case"LOGIN_ERROR":return Object(ke.a)({},e,{loginError:t.error,isLoading:!1});case"LOG_OUT_SUCCESS":return Object(ke.a)({},e,{user:{},loginError:null,signUpError:null,isLoading:!1});case O:return Object(ke.a)({},e,{loginError:null,signUpError:null,signUpSuccess:!1,isLoading:!1});case"LOADING_CONTENT":return Object(ke.a)({},e,{isLoading:!0});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ARTICLES_SUCCESS":return Object(ke.a)({},e,{articles:t.articles,articlesError:null,isLoading:!1,isLoadingArticles:!1});case"FETCH_ARTICLES_ERROR":return Object(ke.a)({},e,{articlesError:t.error,isLoading:!1,isLoadingArticles:!1});case"POST_ARTICLE_ERROR":return Object(ke.a)({},e,{articlesError:t.error,isLoading:!1});case"UNAUTHORIZED":return Object(ke.a)({},e,{deleteArticleError:t.error,unauthorized:!0,isLoading:!1,isLoadingDelete:!1});case"DELETE_USER_SUCCESS":return Object(ke.a)({},e,{isLoadingDelete:!1});case O:return Object(ke.a)({},e,{articlesError:null,deleteArticleError:null,postArticleSuccess:!1,isLoading:!1});case"UPDATE_ARTICLE_ERROR":return Object(ke.a)({},e,{updateArticleError:t.error,unauthorized:!0,isLoadingEditArticle:!1});case"LOADING_CONTENT":return Object(ke.a)({},e,{isLoading:!0});case"LOADING_ARTICLES":return Object(ke.a)({},e,{isLoadingArticles:!0});case"EDIT_LOADING":return Object(ke.a)({},e,{isLoadingEditArticle:!0});case"DELETE_ARTICLE_LOADING":return Object(ke.a)({},e,{isLoadingDelete:!0});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_SUCCESS":return Object(ke.a)({},e,{users:t.users,userLoading:!1});case"FETCH_USERS_ERROR":return Object(ke.a)({},e,{getUsersError:t.error,userLoading:!1});case"FETCH_USER_PROFILE_SUCCESS":return Object(ke.a)({},e,{userProfile:t.user,isLoadingProfile:!1,isLoadingProfileEdit:!1});case"FETCH_USER_PROFILE_ERROR":return Object(ke.a)({},e,{getUserProfileError:t.error,isLoadingProfile:!1,isLoadingProfileEdit:!1});case"UPDATE_USER_PROFILE_ERROR":return Object(ke.a)({},e,{updateUserError:t.error,isLoadingProfileEdit:!1});case"DELETE_USER_SUCCESS":return Object(ke.a)({},e);case"DELETE_USER_ERROR":return Object(ke.a)({},e,{deleteUserError:t.error});case"USER_LOADING":return Object(ke.a)({},e,{userLoading:!0});case"USER_PROFILE_LOADING":return Object(ke.a)({},e,{isLoadingProfile:!0});case"USER_EDIT_PROFILE_LOADING":return Object(ke.a)({},e,{isLoadingProfileEdit:!0});default:return e}},writers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WRITERS_SUCCESS":return Object(ke.a)({},e,{writers:t.writers,isLoadingWriter:!1});case"FETCH_WRITERS_ERROR":return Object(ke.a)({},e,{writersError:t.error,isLoadingWriter:!1});case"WRITERS_LOADING":return Object(ke.a)({},e,{isLoadingWriter:!0});default:return e}}}),Ge=Object(_e.e)(xe,Object(_e.d)(Object(_e.a)(Te.a)));i.a.render(n.a.createElement(s.a,{store:Ge},n.a.createElement(c.c,{history:c.d},n.a.createElement(c.b,{component:d},n.a.createElement(c.b,{path:"/",component:Ce}),n.a.createElement(c.b,{path:"login",component:_}),n.a.createElement(c.b,{path:"home",component:q}),n.a.createElement(c.b,{path:"users",component:Ee}),n.a.createElement(c.b,{path:"writers",component:ve}),n.a.createElement(c.b,{path:"profile",component:we})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/news-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/news-react","/service-worker.js");Le?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Re(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Re(t,e)})}}()},40:function(e,t,a){e.exports=a.p+"static/media/logout-icon.bcabdb08.png"},42:function(e,t,a){e.exports=a(120)},60:function(e,t,a){},89:function(e,t,a){}},[[42,2,1]]]);
//# sourceMappingURL=main.916c9168.chunk.js.map