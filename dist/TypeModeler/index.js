(()=>{var dt=Object.defineProperty,ct=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var Z=(t,i,e)=>i in t?dt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,l=(t,i)=>{for(var e in i||(i={}))mt.call(i,e)&&Z(t,e,i[e]);if(p)for(var e of p(i))gt.call(i,e)&&Z(t,e,i[e]);return t},r=(t,i)=>ct(t,ht(i));var L={custom:{label:"Custom",row:[{content:""},{content:""},{content:""},{content:""}]},id:{label:"ID",row:[{content:"id"},{content:"uuid"},{content:""},{content:""}]},number:{label:"Number",row:[{content:"counter"},{content:"number"},{content:"0"},{content:""}]},string:{label:"String",row:[{content:"title"},{content:"string"},{content:'""'},{content:""}]},boolean:{label:"Boolean",row:[{content:"state"},{content:"boolean"},{content:"false"},{content:""}]},timestamp:{label:"Timestamp",row:[{content:"date"},{content:"timestamp"},{content:"now"},{content:""}]},object:{label:"Object",row:[{content:"meta"},{content:"object"},{content:`{
    rating: 0
}`},{content:""}]},array:{label:"Array",row:[{content:"reviews"},{content:"array"},{content:"[]"},{content:""}]},enum:{label:"Enum",row:[{content:"status"},{content:"enum"},{content:"active, disabled"},{content:""}]},function:{label:"Function",row:[{content:"onClick"},{content:"function"},{content:"onClickEvent"},{content:""}]},richtext:{label:"Richtext",row:[{content:"comment"},{content:"richtext"},{content:'""'},{content:""}]},image:{label:"Image",row:[{content:"preview"},{content:"image"},{content:"undefined"},{content:""}]},color:{label:"Color",row:[{content:"theme"},{content:"color"},{content:"#FFFFFF"},{content:""}]},link:{label:"Link",row:[{content:"twitter"},{content:"link"},{content:"undefined"},{content:""}]}};var h="Inter",C="#000000",s="#FFFFFF",ut="#EBEBEB",P="#DDDDDD",T="#B4B4B4",x="#979797",O="#777777";var k="#545454",$="#424242",M="#252525",_="#29B95F",g="#277DFF",N="#7522C5",Y="#F0783C",H="#F04B6A",ft={themes:{light:{typo:{h4:{fontFamily:h,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:h,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:h,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:h,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:h,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:h,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:h,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:C},inverted:{color:s},except:{color:s}},secondary:{default:{color:O}},minor:{default:{color:T}},link:{default:{color:g}},status:{success:{color:_},error:{color:H}}},border:{divider:{fill:P}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:_,color:s},warning:{fill:Y,color:s},error:{fill:H,color:s},primary:{fill:g,color:s},info:{fill:N,color:s},dark:{fill:C,color:s},light:{fill:{r:0,g:0,b:0,a:0},color:O,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:x,color:s}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:ut,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:s,border:{stroke:O,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:g,border:{stroke:g,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:s,border:{stroke:T,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:T,border:{stroke:T,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:C,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:s},active:{fill:g},disabled:{fill:T}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}},dark:{typo:{h4:{fontFamily:h,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:h,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:h,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:h,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:h,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:h,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:h,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:s},inverted:{color:C},except:{color:s}},secondary:{default:{color:x}},minor:{default:{color:k}},link:{default:{color:g}},status:{success:{color:_},error:{color:H}}},border:{divider:{fill:$}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:_,color:s},warning:{fill:Y,color:s},error:{fill:H,color:s},primary:{fill:g,color:s},info:{fill:N,color:s},dark:{fill:C,color:s},light:{fill:{r:0,g:0,b:0,a:0},color:s,border:{stroke:P,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:x,color:s}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:$,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:M,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:g,border:{stroke:g,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:M,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:k,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:s,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:M},active:{fill:g},disabled:{fill:k}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}}},n=ft;var{widget:bt}=figma,{Input:yt,Text:wt,Fragment:vt}=bt;function Lt(t){var i,e,m,u,f,c,b,R,A;return figma.widget.h(vt,null,!t.disabled&&figma.widget.h(yt,l(l({name:"InputGhost",inputBehavior:(i=t.type)!=null?i:"wrap",value:t.content,placeholder:t.placeholder,placeholderProps:{fill:n.themes[t.theme].txt.minor.default.color,opacity:1},width:(m=(e=t==null?void 0:t.style)==null?void 0:e.width)!=null?m:"fill-parent",onTextEditEnd:z=>t.onEditEnd(z),fill:n.themes[t.theme].txt[t.variant.txt].default.color,horizontalAlignText:(f=(u=t==null?void 0:t.style)==null?void 0:u.textAlign)!=null?f:"left",hoverStyle:{fill:n.themes[t.theme].txt.link.default.color}},n.themes[t.theme].typo[t.variant.typo]),t==null?void 0:t.style)),t.disabled&&figma.widget.h(wt,l(r(l({},n.themes[t.theme].typo[t.variant.typo]),{fill:n.themes[t.theme].txt[t.variant.txt].default.color,width:(b=(c=t==null?void 0:t.style)==null?void 0:c.width)!=null?b:"fill-parent",horizontalAlignText:(A=(R=t==null?void 0:t.style)==null?void 0:R.textAlign)!=null?A:"left"}),t==null?void 0:t.style),t.content))}var E=Lt;var{widget:Ct}=figma,{AutoLayout:U,Text:Xt}=Ct;function Tt(t){return figma.widget.h(U,{name:"Header",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",padding:n.themes[t.theme].layout.container},figma.widget.h(U,{name:"Widget__row",verticalAlignItems:"center",direction:"horizontal",spacing:24,padding:0,width:"fill-parent"},figma.widget.h(E,{theme:t.theme,variant:{typo:"h4",txt:"primary"},content:t.title,placeholder:"Title",disabled:t.disabled,onEditEnd:i=>t.onTitleEditEnd(i)}),t.suffix&&t.suffix),t.isDescriptionVisible&&figma.widget.h(E,{theme:t.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:t.description,placeholder:"Add any description...",disabled:t.disabled,onEditEnd:i=>t.onDescriptionEditEnd(i)}))}var j=Tt;var{widget:xt}=figma,{SVG:kt}=xt,w={plus:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${t}"/></svg>`,minus:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="12" height="1" fill="${t}"/></svg>`,chevronUp:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${t}"/></svg>`,chevronDown:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${t}"/></svg>`,check:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${t}"/></svg>`,darkmode:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${t}"/></svg>`,descriptionNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${t}"/></svg>`,editingNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${t}"/></svg>`,checkNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${t}"/></svg>`,visible:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${t}"/></svg>`,hidden:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${t}"/></svg>`};function Et(t){return figma.widget.h(kt,{name:"Icon",height:20,width:20,src:w[t.glyph](t.color)})}var J=Et;var{widget:It}=figma,{AutoLayout:Rt,Frame:At,Text:_t}=It;function Ht(t){var i,e;return figma.widget.h(Rt,{name:"ButtonGhost",direction:"horizontal",height:n.themes[t.theme].controls.size[(i=t.size)!=null?i:400],width:t.content?"hug-contents":n.themes[t.theme].controls.size[(e=t.size)!=null?e:400],spacing:8,padding:{left:t.content&&t.glyph?12:t.content?16:0,right:t.content&&t.glyph||t.content?16:0},onClick:t.disabled?()=>{}:t.onClick,cornerRadius:n.themes[t.theme].controls.ghost.default.cornerRadius,hoverStyle:t.disabled?void 0:n.themes[t.theme].controls.ghost.hover,horizontalAlignItems:"center",verticalAlignItems:"center"},t.glyph&&figma.widget.h(At,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(J,{glyph:t.glyph,color:t.disabled?n.themes[t.theme].txt.minor.default.color:n.themes[t.theme].txt[t.variant?t.variant:"primary"].default.color})),t.content&&figma.widget.h(_t,r(l({},n.themes[t.theme].typo.p6),{fill:t.disabled?n.themes[t.theme].txt.minor.default.color:n.themes[t.theme].txt[t.variant?t.variant:"primary"].default.color}),t.content))}var v=Ht;var{widget:Vt}=figma,{AutoLayout:K,Text:zt}=Vt;function Dt(t){return figma.widget.h(K,{key:t.key,name:"ItemTableHeader",direction:"horizontal",height:"hug-contents",width:"fill-parent",spacing:16,padding:n.themes[t.theme].layout.item},t.row.map((i,e)=>figma.widget.h(K,{key:`ItemTableHeader__cell_${e}`,name:"ItemTableHeader__cell",direction:"horizontal",height:n.themes[t.theme].controls.size[200],verticalAlignItems:"center",width:i.visibility!==!1?i.width:n.themes[t.theme].controls.size[200],spacing:2},i.visibility!==!1&&figma.widget.h(zt,r(l({},n.themes[t.theme].typo.p6),{fill:n.themes[t.theme].txt.secondary.default.color,horizontalAlignText:"left"}),i.title),typeof i.visibility=="boolean"&&!t.disabled&&figma.widget.h(v,{theme:t.theme,variant:"secondary",size:200,glyph:i.visibility?"visible":"hidden",onClick:()=>{var m;return(m=t.onVisibilityChanged)==null?void 0:m.call(t,{index:e})}}))))}var X=Dt;var{widget:Ft}=figma,{AutoLayout:q}=Ft;function Ot(t){return figma.widget.h(q,{key:t.key,name:"ItemTableRow",direction:"horizontal",height:"hug-contents",width:"fill-parent",spacing:16},t.row.map((i,e)=>{var m;return figma.widget.h(q,{key:`ItemTableRow__cell_${e}`,name:"ItemTableRow__cell",direction:"horizontal",verticalAlignItems:"start",width:i.visibility!==!1?i.width:n.themes[t.theme].controls.size[200],height:i.visibility!==!1?"hug-contents":1},i.visibility!==!1&&figma.widget.h(E,{theme:t.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:(m=i.content)!=null?m:"",placeholder:"...",disabled:t.disabled,style:l({width:"fill-parent",textAlign:"left"},i==null?void 0:i.style),onEditEnd:u=>{var f;return(f=t.onEditEnd)==null?void 0:f.call(t,r(l({},u),{index:e}))}}))}))}var Q=Ot;var{widget:Mt}=figma,{AutoLayout:W,Frame:Wt}=Mt;function Bt(t){let i=t.positionUp!==void 0||t.positionDown!==void 0||t.deleting!==void 0;return figma.widget.h(W,{key:t.key,name:"Item",direction:"horizontal",spacing:0,padding:t.padding?t.padding:n.themes[t.theme].layout.item,width:"fill-parent"},figma.widget.h(W,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},t.children),figma.widget.h(Wt,{height:32,width:1}),i&&figma.widget.h(W,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},t.positionUp!==void 0&&figma.widget.h(v,{theme:t.theme,glyph:"chevronUp",disabled:!t.positionUp,onClick:()=>{var e;return(e=t.onPositionChange)==null?void 0:e.call(t,{direction:"up"})}}),t.positionDown!==void 0&&figma.widget.h(v,{theme:t.theme,glyph:"chevronDown",disabled:!t.positionDown,onClick:()=>{var e;return(e=t.onPositionChange)==null?void 0:e.call(t,{direction:"down"})}}),t.deleting!==void 0&&figma.widget.h(v,{theme:t.theme,glyph:"minus",disabled:t.deleting,onClick:()=>{var e;return(e=t.onDelete)==null?void 0:e.call(t)}})))}var tt=Bt;var{widget:Gt}=figma,{Rectangle:St}=Gt;function pt(t){return figma.widget.h(St,{width:"fill-parent",height:1,fill:n.themes[t.theme].border.divider.fill})}var B=pt;var Zt=t=>{let i=e=>(new Date().getMilliseconds()*100*e).toString(16);return i(t?1*t:1)+"-"+i(t?2*t:2)+"-"+i(t?4*t:4)+"-"+i(t?6*t:6)},I=Zt;var{widget:et}=figma,{AutoLayout:it,Frame:ye,Text:we,Input:ve,Rectangle:Le,Image:Ce,SVG:Te,Ellipse:xe,Line:ke,Fragment:Ee,useSyncedState:V,useSyncedMap:Ie,usePropertyMenu:Pt,useEffect:$t,useStickable:Re,useStickableHost:Ae,useWidgetId:_e,register:He,waitForTask:Ve}=et;function Nt(){let[t,i]=V("data",{title:"Entity name",description:"",isDescriptionVisible:!0,isEditingVisible:!0,colorTheme:"light"}),[e,m]=V("tableConfig",[{title:"Name",width:120,style:{fontWeight:600}},{title:"Type",width:120,style:{fill:n.themes[t.colorTheme].txt.status.success.color}},{title:"Default value",width:160,visibility:!0},{title:"Description",width:"fill-parent",visibility:!0,style:{fill:n.themes[t.colorTheme].txt.secondary.default.color}}]),[u,f]=V("table",Object.keys(L)[0]),[c,b]=V("entries",new Array({uuid:I(2),position:0,row:[r(l({},e[0]),{content:"id"}),r(l({},e[1]),{content:"uuid"}),r(l({},e[2]),{content:"uuid()"}),r(l({},e[3]),{content:""})]},{uuid:I(4),position:1,row:[r(l({},e[0]),{content:"likes"}),r(l({},e[1]),{content:"number"}),r(l({},e[2]),{content:"0"}),r(l({},e[3]),{content:""})]},{uuid:I(6),position:2,row:[r(l({},e[0]),{content:"content?"}),r(l({},e[1]),{content:"string"}),r(l({},e[2]),{content:'""'}),r(l({},e[3]),{content:"160 symbols max"})]}));$t(()=>{}),console.log(t.isEditingVisible),Pt([{itemType:"toggle",tooltip:"Show/hide description",propertyName:"isDescriptionVisible",isToggled:!t.isDescriptionVisible,icon:w.descriptionNo(t.isDescriptionVisible?n.themes.light.txt.minor.default.color:n.themes.light.txt.primary.inverted.color)},{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!t.isEditingVisible,icon:w.editingNo(t.isEditingVisible?n.themes.light.txt.minor.default.color:n.themes.light.txt.primary.inverted.color)},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:t.colorTheme==="dark",icon:w.darkmode(t.colorTheme==="dark"?n.themes.light.txt.primary.inverted.color:n.themes.light.txt.minor.default.color)},...t.isEditingVisible?[{itemType:"separator"},{itemType:"dropdown",tooltip:"Type of new entry",propertyName:"entryType",options:Object.keys(L).map(o=>({option:o,label:L[o].label})),selectedOption:u},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:w.plus(n.themes.light.txt.minor.default.color)}]:[]],({propertyName:o,propertyValue:a})=>{o==="isDescriptionVisible"&&R(),o==="isEditingVisible"&&A(),o==="colorTheme"&&z(),o==="entryType"&&f(a),o==="addEntry"&&G(u)});let R=()=>{i(r(l({},t),{isDescriptionVisible:!t.isDescriptionVisible}))},A=()=>{i(r(l({},t),{isEditingVisible:!t.isEditingVisible}))},z=()=>{i(r(l({},t),{colorTheme:t.colorTheme==="dark"?"light":"dark"}))},G=o=>{let a=I();c.filter(d=>d.uuid===a).length?G(o):b([...c,{uuid:a,position:c[c.length-1].position+1,row:L[o].row.map((d,y)=>l(l({},e[y]),d))}])},S=(o,a)=>{i(r(l({},t),{[o]:a}))},nt=(o,a)=>{m(e.map((d,y)=>y===o?l(l({},d),a):d))},ot=(o,a)=>{let d=c.findIndex(F=>F.uuid===o.uuid),y=a==="up"?d-1:d+1,D=[...c],at=D.splice(d,1)[0];D.splice(y,0,at),b(D.map((F,st)=>r(l({},F),{position:st})))},lt=o=>{b([...c.filter(a=>a.uuid!==o.uuid)].map((a,d)=>r(l({},a),{position:d})))},rt=(o,a)=>{b([...c.filter(d=>d.uuid!==o.uuid),r(l({},o),{row:o.row.map((d,y)=>y===a.index?r(l({},d),{content:a.characters}):d)})])};return figma.widget.h(it,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:n.themes[t.colorTheme].radius.container.cornerRadius,fill:n.themes[t.colorTheme].layer.default.fill,width:800,effect:n.themes[t.colorTheme].shadow.container},figma.widget.h(j,{theme:t.colorTheme,title:t.title,isDescriptionVisible:t.isDescriptionVisible,description:t.description,disabled:!t.isEditingVisible,onTitleEditEnd:o=>S("title",o.characters),onDescriptionEditEnd:o=>S("description",o.characters)}),figma.widget.h(B,{theme:t.colorTheme}),figma.widget.h(X,{key:"Widget__tableHeader",theme:t.colorTheme,disabled:!t.isEditingVisible,row:e,onVisibilityChanged:o=>nt(o.index,{visibility:!e[o.index].visibility})}),figma.widget.h(B,{theme:t.colorTheme}),figma.widget.h(it,{name:"Widget__tableBody",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},c.sort((o,a)=>o.position-a.position).map(o=>figma.widget.h(tt,{key:o.uuid,theme:t.colorTheme,positionUp:t.isEditingVisible?o.position!==0:void 0,positionDown:t.isEditingVisible?o.position!==c.length-1:void 0,deleting:t.isEditingVisible?o.position===0&&c.length===1:void 0,onPositionChange:a=>ot(o,a.direction),onDelete:()=>lt(o),padding:{vertical:4,horizontal:n.themes[t.colorTheme].layout.item.horizontal}},figma.widget.h(Q,{key:o.uuid,theme:t.colorTheme,disabled:!t.isEditingVisible,row:o.row.map((a,d)=>l(l({},a),e[d])),onEditEnd:a=>rt(o,a)})))))}et.register(Nt);})();
