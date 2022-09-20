(()=>{var ce=Object.defineProperty,ae=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var Z=(e,o,n)=>o in e?ce(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,s=(e,o)=>{for(var n in o||(o={}))ue.call(o,n)&&Z(e,n,o[n]);if(P)for(var n of P(o))ge.call(o,n)&&Z(e,n,o[n]);return e},c=(e,o)=>ae(e,he(o));var h={check:{label:"Checkbox"},title:{label:"Group"}};var a="Inter",b="#000000",d="#FFFFFF",me="#EBEBEB",N="#DDDDDD",k="#B4B4B4",v="#979797",_="#777777";var C="#545454",Y="#424242",O="#252525",U="#29B95F",u="#277DFF",$="#7522C5",j="#F0783C",J="#F04B6A",fe={themes:{light:{typo:{h4:{fontFamily:a,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:a,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:a,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:a,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:a,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:a,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:a,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:b},inverted:{color:d},except:{color:d}},secondary:{default:{color:_}},minor:{default:{color:k}},link:{default:{color:u}}},border:{divider:{fill:N}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:U,color:d},warning:{fill:j,color:d},error:{fill:J,color:d},primary:{fill:u,color:d},info:{fill:$,color:d},dark:{fill:b,color:d},light:{fill:{r:0,g:0,b:0,a:0},color:_,border:{stroke:v,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:v,color:d}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:me,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:d,border:{stroke:_,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:u,border:{stroke:u,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:d,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:k,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:b,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:d},active:{fill:u},disabled:{fill:k}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}},dark:{typo:{h4:{fontFamily:a,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:a,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:a,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:a,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:a,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:a,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:a,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:d},inverted:{color:b},except:{color:d}},secondary:{default:{color:v}},minor:{default:{color:C}},link:{default:{color:u}}},border:{divider:{fill:Y}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:U,color:d},warning:{fill:j,color:d},error:{fill:J,color:d},primary:{fill:u,color:d},info:{fill:$,color:d},dark:{fill:b,color:d},light:{fill:{r:0,g:0,b:0,a:0},color:d,border:{stroke:N,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:v,color:d}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:Y,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:O,border:{stroke:v,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:u,border:{stroke:u,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:O,border:{stroke:C,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:C,border:{stroke:C,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:d,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:O},active:{fill:u},disabled:{fill:C}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}}},i=fe;var{widget:ye}=figma,{Input:be,Text:ke,Fragment:ve}=ye;function Ce(e){var o,n,w,r,m,x,L,E,T;return figma.widget.h(ve,null,!e.disabled&&figma.widget.h(be,s({name:"InputGhost",inputBehavior:(o=e.type)!=null?o:"wrap",value:e.content,placeholder:e.placeholder,placeholderProps:{fill:i.themes[e.theme].txt.minor.default.color,opacity:1},width:(w=(n=e==null?void 0:e.style)==null?void 0:n.width)!=null?w:"fill-parent",onTextEditEnd:I=>e.onEditEnd(I),fill:i.themes[e.theme].txt[e.variant.txt].default.color,horizontalAlignText:(m=(r=e==null?void 0:e.style)==null?void 0:r.textAlign)!=null?m:"left",hoverStyle:{fill:i.themes[e.theme].txt.link.default.color}},i.themes[e.theme].typo[e.variant.typo])),e.disabled&&figma.widget.h(ke,c(s({},i.themes[e.theme].typo[e.variant.typo]),{fill:i.themes[e.theme].txt[e.variant.txt].default.color,width:(L=(x=e==null?void 0:e.style)==null?void 0:x.width)!=null?L:"fill-parent",horizontalAlignText:(T=(E=e==null?void 0:e.style)==null?void 0:E.textAlign)!=null?T:"left"}),e.content))}var f=Ce;var{widget:we}=figma,{AutoLayout:X,Text:ot}=we;function xe(e){return figma.widget.h(X,{name:"Header",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",padding:i.themes[e.theme].layout.container},figma.widget.h(X,{name:"Widget__row",verticalAlignItems:"center",direction:"horizontal",spacing:24,padding:0,width:"fill-parent"},figma.widget.h(f,{theme:e.theme,variant:{typo:"h4",txt:"primary"},content:e.title,placeholder:"Title",disabled:e.disabled,onEditEnd:o=>e.onTitleEditEnd(o)}),e.suffix&&e.suffix),e.isDescriptionVisible&&figma.widget.h(f,{theme:e.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:e.description,placeholder:"Add any description...",disabled:e.disabled,onEditEnd:o=>e.onDescriptionEditEnd(o)}))}var K=xe;var{widget:Le}=figma,{SVG:Ee}=Le,y={plus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${e}"/></svg>`,minus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="12" height="1" fill="${e}"/></svg>`,chevronUp:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${e}"/></svg>`,chevronDown:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${e}"/></svg>`,check:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${e}"/></svg>`,darkmode:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${e}"/></svg>`,descriptionNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${e}"/></svg>`,editingNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${e}"/></svg>`,checkNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${e}"/></svg>`};function Te(e){return figma.widget.h(Ee,{name:"Icon",height:20,width:20,src:y[e.glyph](e.color)})}var A=Te;var{widget:Ie}=figma,{AutoLayout:Ae}=Ie;function Re(e){return figma.widget.h(Ae,c(s({name:"Checkbox",direction:"horizontal",height:24,width:24,spacing:0,padding:0,onClick:e.onClick,cornerRadius:i.themes[e.theme].controls.checkbox.default.cornerRadius,horizontalAlignItems:"center",verticalAlignItems:"center",fill:i.themes[e.theme].controls.checkbox[!e.value&&!e.disabled?"default":e.value&&!e.disabled?"active":!e.value&&e.disabled?"defaultDisabled":e.value&&e.disabled?"activeDisabled":"default"].fill},i.themes[e.theme].controls.checkbox[!e.value&&!e.disabled?"default":e.value&&!e.disabled?"active":!e.value&&e.disabled?"defaultDisabled":e.value&&e.disabled?"activeDisabled":"default"].border),{hoverStyle:e.disabled?{}:i.themes[e.theme].controls.checkbox.hover.border}),e.value&&figma.widget.h(A,{glyph:"check",color:i.themes[e.theme].txt.primary.except.color}))}var q=Re;var{widget:pe}=figma,{AutoLayout:Q}=pe;function De(e){return figma.widget.h(Q,{key:e.key,name:"ItemCheckbox",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:{top:4,bottom:4}},figma.widget.h(Q,{name:"ItemCheckbox__tag",direction:"horizontal",height:"hug-contents",width:"hug-contents",padding:{right:16}},figma.widget.h(q,{theme:e.theme,value:e.value,disabled:e.disabledCheckbox,onClick:e.onCheckboxChange})),figma.widget.h(f,{theme:e.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:e.contentBody,placeholder:e.placeholderBody,disabled:Boolean(e.disabled),onEditEnd:o=>e.onEditEnd(o)}))}var ee=De;var{widget:Ve}=figma,{AutoLayout:_e}=Ve;function Oe(e){return figma.widget.h(_e,{key:e.key,name:"ItemTitle",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:{top:4,bottom:2}},figma.widget.h(f,{theme:e.theme,variant:{typo:"h5",txt:"primary"},type:"multiline",content:e.contentBody,placeholder:e.placeholderBody,disabled:Boolean(e.disabled),onEditEnd:o=>e.onEditEnd(o)}))}var te=Oe;var{widget:Fe}=figma,{AutoLayout:He,Frame:Be,Text:ze}=Fe;function We(e){return figma.widget.h(He,{name:"ButtonGhost",direction:"horizontal",height:32,width:e.content?"hug-contents":32,spacing:8,padding:{left:e.content&&e.glyph?12:e.content?16:0,right:e.content&&e.glyph||e.content?16:0},onClick:e.onClick,cornerRadius:i.themes[e.theme].controls.ghost.default.cornerRadius,hoverStyle:e.disabled?void 0:i.themes[e.theme].controls.ghost.hover,horizontalAlignItems:"center",verticalAlignItems:"center"},e.glyph&&figma.widget.h(Be,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(A,{glyph:e.glyph,color:e.disabled?i.themes[e.theme].txt.minor.default.color:i.themes[e.theme].txt.primary.default.color})),e.content&&figma.widget.h(ze,c(s({},i.themes[e.theme].typo.p6),{fill:e.disabled?i.themes[e.theme].txt.minor.default.color:i.themes[e.theme].txt.primary.default.color}),e.content))}var R=We;var{widget:Ge}=figma,{AutoLayout:F}=Ge;function Se(e){let o=e.positionUp!==void 0||e.positionDown!==void 0||e.deleting!==void 0;return figma.widget.h(F,{key:e.key,name:"Item",direction:"horizontal",spacing:0,padding:e.padding?e.padding:i.themes[e.theme].layout.item,width:"fill-parent"},figma.widget.h(F,{name:"Item__content",direction:"horizontal",height:"hug-contents",width:"fill-parent"},e.children),o&&figma.widget.h(F,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:24}},e.positionUp!==void 0&&figma.widget.h(R,{theme:e.theme,glyph:"chevronUp",disabled:!e.positionUp,onClick:()=>{var n;return(n=e.onPositionChange)==null?void 0:n.call(e,{direction:"up"})}}),e.positionDown!==void 0&&figma.widget.h(R,{theme:e.theme,glyph:"chevronDown",disabled:!e.positionDown,onClick:()=>{var n;return(n=e.onPositionChange)==null?void 0:n.call(e,{direction:"down"})}}),e.deleting!==void 0&&figma.widget.h(R,{theme:e.theme,glyph:"minus",disabled:e.deleting,onClick:()=>{var n;return(n=e.onDelete)==null?void 0:n.call(e)}})))}var H=Se;var{widget:Me}=figma,{Rectangle:Pe}=Me;function Ze(e){return figma.widget.h(Pe,{width:"fill-parent",height:1,fill:i.themes[e.theme].border.divider.fill})}var B=Ze;var{widget:Ne}=figma,{AutoLayout:Ye,Text:Et}=Ne;function Ue(e){return figma.widget.h(Ye,{name:"Footer",direction:"vertical",width:"fill-parent",spacing:0,padding:i.themes[e.theme].layout.container},e.children)}var ie=Ue;var $e=e=>{let o=n=>(new Date().getMilliseconds()*100*n).toString(16);return o(e?1*e:1)+"-"+o(e?2*e:2)+"-"+o(e?4*e:4)+"-"+o(e?6*e:6)},p=$e;var{widget:oe}=figma,{AutoLayout:ne,Frame:Rt,Text:je,Input:pt,Rectangle:Dt,Image:Vt,SVG:_t,Ellipse:Ot,Line:Ft,Fragment:Ht,useSyncedState:z,useSyncedMap:Bt,usePropertyMenu:Je,useEffect:Xe,useStickable:zt,useStickableHost:Wt,useWidgetId:Gt,register:St,waitForTask:Mt}=oe;function Ke(){let[e,o]=z("data",{title:"My checklist",isDescriptionVisible:!0,isEditingVisible:!0,isChecksAllowed:!0,description:"",colorTheme:"light"}),[n,w]=z("entryType",Object.keys(h)[0]),[r,m]=z("entries",new Array({uuid:p(3),position:0,type:Object.keys(h)[1],content:"Today"},{uuid:p(5),position:1,type:Object.keys(h)[0],value:!1,content:""}));Xe(()=>{}),Je([{itemType:"toggle",tooltip:"Show/hide description",propertyName:"isDescriptionVisible",isToggled:!e.isDescriptionVisible,icon:y.descriptionNo(e.isDescriptionVisible?i.themes.light.txt.minor.default.color:i.themes.light.txt.primary.inverted.color)},{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!e.isEditingVisible,icon:y.editingNo(e.isEditingVisible?i.themes.light.txt.minor.default.color:i.themes.light.txt.primary.inverted.color)},{itemType:"toggle",tooltip:"Enable/disable checkboxes",propertyName:"isChecksAllowed",isToggled:!e.isChecksAllowed,icon:y.checkNo(e.isChecksAllowed?i.themes.light.txt.minor.default.color:i.themes.light.txt.primary.inverted.color)},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:e.colorTheme==="dark",icon:y.darkmode(e.colorTheme==="dark"?i.themes.light.txt.primary.inverted.color:i.themes.light.txt.minor.default.color)},{itemType:"separator"},{itemType:"dropdown",tooltip:"Type of new entry",propertyName:"entryType",options:Object.keys(h).map(t=>({option:t,label:h[t].label})),selectedOption:n},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:y.plus(i.themes.light.txt.minor.default.color)}],({propertyName:t,propertyValue:l})=>{t==="isDescriptionVisible"&&x(),t==="isEditingVisible"&&L(),t==="isChecksAllowed"&&E(),t==="colorTheme"&&T(),t==="entryType"&&w(l),t==="addEntry"&&I(n)});let x=()=>{o(c(s({},e),{isDescriptionVisible:!e.isDescriptionVisible}))},L=()=>{o(c(s({},e),{isEditingVisible:!e.isEditingVisible}))},E=()=>{o(c(s({},e),{isChecksAllowed:!e.isChecksAllowed}))},T=()=>{o(c(s({},e),{colorTheme:e.colorTheme==="dark"?"light":"dark"}))},I=t=>{let l=p();r.filter(g=>g.uuid===l).length?I(t):m([...r,{uuid:l,position:r[r.length-1].position+1,type:t,content:""}])},W=(t,l)=>{o(c(s({},e),{[t]:l}))},G=(t,l)=>{let g=r.findIndex(V=>V.uuid===t.uuid),de=l==="up"?g-1:g+1,D=[...r],re=D.splice(g,1)[0];D.splice(de,0,re),m(D.map((V,se)=>c(s({},V),{position:se})))},S=t=>{m([...r.filter(l=>l.uuid!==t.uuid)].map((l,g)=>c(s({},l),{position:g})))},M=(t,l)=>{m([...r.filter(g=>g.uuid!==t.uuid),c(s({},t),{content:l})])},le=t=>{m([...r.filter(l=>l.uuid!==t.uuid),c(s({},t),{value:!t.value})])};return figma.widget.h(ne,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:i.themes[e.colorTheme].radius.container.cornerRadius,fill:i.themes[e.colorTheme].layer.default.fill,width:800,effect:i.themes[e.colorTheme].shadow.container},figma.widget.h(K,{theme:e.colorTheme,title:e.title,isDescriptionVisible:e.isDescriptionVisible,description:e.description,disabled:!e.isEditingVisible,onTitleEditEnd:t=>W("title",t.characters),onDescriptionEditEnd:t=>W("description",t.characters)}),figma.widget.h(B,{theme:e.colorTheme}),figma.widget.h(ne,{name:"Widget__list",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},r.sort((t,l)=>t.position-l.position).map(t=>{if(t.type===Object.keys(h)[0])return figma.widget.h(H,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?t.position!==0:void 0,positionDown:e.isEditingVisible?t.position!==r.length-1:void 0,deleting:e.isEditingVisible?t.position===0&&r.length===1:void 0,padding:{vertical:8,horizontal:i.themes[e.colorTheme].layout.item.horizontal},onPositionChange:l=>G(t,l.direction),onDelete:()=>S(t)},figma.widget.h(ee,{key:t.uuid,theme:e.colorTheme,value:Boolean(t.value),contentBody:t.content,placeholderBody:"Type something...",disabled:!e.isEditingVisible,disabledCheckbox:!e.isChecksAllowed,onEditEnd:l=>M(t,l.characters),onCheckboxChange:()=>e.isChecksAllowed?le(t):null}));if(t.type===Object.keys(h)[1])return figma.widget.h(H,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?t.position!==0:void 0,positionDown:e.isEditingVisible?t.position!==r.length-1:void 0,deleting:e.isEditingVisible?t.position===0&&r.length===1:void 0,padding:{top:t.position===0?8:24,bottom:8,horizontal:i.themes[e.colorTheme].layout.item.horizontal},onPositionChange:l=>G(t,l.direction),onDelete:()=>S(t)},figma.widget.h(te,{key:t.uuid,theme:e.colorTheme,contentBody:t.content,placeholderBody:"Type something...",disabled:!e.isEditingVisible,onEditEnd:l=>M(t,l.characters)}))})),figma.widget.h(B,{theme:e.colorTheme}),figma.widget.h(ie,{theme:e.colorTheme},figma.widget.h(je,c(s({key:"Footer__content"},i.themes[e.colorTheme].typo.p5),{fill:i.themes[e.colorTheme].txt.secondary.default.color,width:"fill-parent",horizontalAlignText:"left"}),"Completed ",r.filter(t=>t.type===Object.keys(h)[0]&&t.value).length," of"," ",r.filter(t=>t.type===Object.keys(h)[0]).length)))}oe.register(Ke);})();
