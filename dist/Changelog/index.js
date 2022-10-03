(()=>{var se=Object.defineProperty,ce=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var S=(e,n,o)=>n in e?se(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,l=(e,n)=>{for(var o in n||(n={}))ge.call(n,o)&&S(e,o,n[o]);if(G)for(var o of G(n))me.call(n,o)&&S(e,o,n[o]);return e},h=(e,n)=>ce(e,he(n));var V={name:"advancedChangelog",version:"1.2.3",website:"https://offframes.com/figma-widget/advanced-changelog"},u={added:{label:"Added",status:"success"},fixed:{label:"Fixed",status:"primary"},changed:{label:"Changed",status:"info"},depricated:{label:"Deprecated",status:"warning"},removed:{label:"Removed",status:"dark"},breaking:{label:"Breaking",status:"error"},other:{label:"Other",status:"disabled"},inProgress:{label:"In progress",status:"light"}};var s="Inter",k="#000000",r="#FFFFFF",ue="#EBEBEB",Z="#DDDDDD",x="#B4B4B4",T="#979797",H="#777777";var I="#545454",P="#424242",z="#252525",p="#29B95F",g="#277DFF",$="#7522C5",Y="#F0783C",D="#F04B6A",fe={themes:{light:{typo:{h4:{fontFamily:s,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:s,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:s,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:s,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:s,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:s,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:s,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:k},inverted:{color:r},except:{color:r}},secondary:{default:{color:H}},minor:{default:{color:x}},link:{default:{color:g}},status:{success:{color:p},error:{color:D}}},border:{divider:{fill:Z}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:p,color:r},warning:{fill:Y,color:r},error:{fill:D,color:r},primary:{fill:g,color:r},info:{fill:$,color:r},dark:{fill:k,color:r},light:{fill:{r:0,g:0,b:0,a:0},color:H,border:{stroke:T,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:T,color:r}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:ue,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:r,border:{stroke:H,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:g,border:{stroke:g,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:r,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:x,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:k,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:r},active:{fill:g},disabled:{fill:x}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}},dark:{typo:{h4:{fontFamily:s,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:s,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:s,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:s,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:s,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:s,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:s,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:r},inverted:{color:k},except:{color:r}},secondary:{default:{color:T}},minor:{default:{color:I}},link:{default:{color:g}},status:{success:{color:p},error:{color:D}}},border:{divider:{fill:P}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:p,color:r},warning:{fill:Y,color:r},error:{fill:D,color:r},primary:{fill:g,color:r},info:{fill:$,color:r},dark:{fill:k,color:r},light:{fill:{r:0,g:0,b:0,a:0},color:r,border:{stroke:Z,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:T,color:r}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:P,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:z,border:{stroke:T,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:g,border:{stroke:g,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:z,border:{stroke:I,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:I,border:{stroke:I,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:r,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:z},active:{fill:g},disabled:{fill:I}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}}},i=fe;var{widget:ye}=figma,{Input:ve,Text:Le,Fragment:we}=ye;function Ce(e){var n,o,R,a,m,w,A,_,v;return figma.widget.h(we,null,!e.disabled&&figma.widget.h(ve,l(l({name:"InputGhost",inputBehavior:(n=e.type)!=null?n:"wrap",value:e.content,placeholder:e.placeholder,placeholderProps:{fill:i.themes[e.theme].txt.minor.default.color,opacity:1},width:(R=(o=e==null?void 0:e.style)==null?void 0:o.width)!=null?R:"fill-parent",onTextEditEnd:C=>e.onEditEnd(C),fill:i.themes[e.theme].txt[e.variant.txt].default.color,horizontalAlignText:(m=(a=e==null?void 0:e.style)==null?void 0:a.textAlign)!=null?m:"left",hoverStyle:{fill:i.themes[e.theme].txt.link.default.color}},i.themes[e.theme].typo[e.variant.typo]),e==null?void 0:e.style)),e.disabled&&figma.widget.h(Le,l(h(l({},i.themes[e.theme].typo[e.variant.typo]),{fill:i.themes[e.theme].txt[e.variant.txt].default.color,width:(A=(w=e==null?void 0:e.style)==null?void 0:w.width)!=null?A:"fill-parent",horizontalAlignText:(v=(_=e==null?void 0:e.style)==null?void 0:_.textAlign)!=null?v:"left"}),e==null?void 0:e.style),e.content))}var f=Ce;var{widget:be}=figma,{AutoLayout:N,Text:tt}=be;function Ee(e){return figma.widget.h(N,{name:"Header",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",padding:i.themes[e.theme].layout.container},figma.widget.h(N,{name:"Widget__row",verticalAlignItems:"center",direction:"horizontal",spacing:24,padding:0,width:"fill-parent"},figma.widget.h(f,{theme:e.theme,variant:{typo:"h4",txt:"primary"},content:e.title,placeholder:"Title",disabled:e.disabled,onEditEnd:n=>e.onTitleEditEnd(n)}),e.suffix&&e.suffix),e.isDescriptionVisible&&figma.widget.h(f,{theme:e.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:e.description,placeholder:"Add any description...",disabled:e.disabled,onEditEnd:n=>e.onDescriptionEditEnd(n)}))}var U=Ee;var{widget:ke}=figma,{AutoLayout:xe,Text:lt}=ke;function Te(e){return figma.widget.h(xe,{name:"Footer",direction:"horizontal",horizontalAlignItems:"end",width:"fill-parent",spacing:0,padding:{vertical:16,left:i.themes[e.theme].layout.container.horizontal,right:i.themes[e.theme].layout.container.horizontal-16},verticalAlignItems:"center"},e.children)}var j=Te;var{widget:Ie}=figma,{AutoLayout:Re,Text:Ae}=Ie;function _e(e){var n;return figma.widget.h(Re,l(l({name:"Tag",cornerRadius:i.themes[e.theme].radius.tag.cornerRadius,overflow:"visible",padding:{vertical:4,horizontal:8},width:"fill-parent",horizontalAlignItems:"center",verticalAlignItems:"center",onClick:()=>{var o;return(o=e.onClick)==null?void 0:o.call(e)}},i.themes[e.theme].status[e.variant]),(n=i.themes[e.theme].status[e.variant])==null?void 0:n.border),figma.widget.h(Ae,l({name:"Tag__input",width:"fill-parent",horizontalAlignText:"center",fill:i.themes[e.theme].status[e.variant].color},i.themes[e.theme].typo.caption),e.content))}var K=_e;var{widget:Ve}=figma,{AutoLayout:J}=Ve;function pe(e){return figma.widget.h(J,{key:e.key,name:"ItemTag",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:0},figma.widget.h(J,{name:"ItemTag__tag",direction:"horizontal",height:"hug-contents",width:120,padding:{right:24}},figma.widget.h(K,{theme:e.theme,variant:e.type,content:e.contentTag,onClick:e.onTypeChange})),figma.widget.h(f,{theme:e.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:e.contentBody,placeholder:e.placeholderBody,disabled:Boolean(e.disabled),onEditEnd:n=>e.onEditEnd(n)}))}var X=pe;var{widget:De}=figma,{SVG:Fe}=De,L={plus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${e}"/></svg>`,minus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="12" height="1" fill="${e}"/></svg>`,chevronUp:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${e}"/></svg>`,chevronDown:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${e}"/></svg>`,check:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${e}"/></svg>`,darkmode:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${e}"/></svg>`,descriptionNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${e}"/></svg>`,editingNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${e}"/></svg>`,checkNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${e}"/></svg>`,visible:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${e}"/></svg>`,hidden:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${e}"/></svg>`,info:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10.5 13.5V9H9.5V13.5H10.5ZM10 7.75C10.4142 7.75 10.75 7.41421 10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7C9.25 7.41421 9.58579 7.75 10 7.75Z" fill="${e}"/></svg>`};function He(e){return figma.widget.h(Fe,{name:"Icon",height:20,width:20,src:L[e.glyph](e.color)})}var q=He;var{widget:ze}=figma,{AutoLayout:Oe,Frame:Be,Text:Me}=ze;function We(e){var n,o;return figma.widget.h(Oe,{name:"ButtonGhost",direction:"horizontal",height:i.themes[e.theme].controls.size[(n=e.size)!=null?n:400],width:e.content?"hug-contents":i.themes[e.theme].controls.size[(o=e.size)!=null?o:400],spacing:4,padding:{left:e.content&&e.glyph?12:e.content?16:0,right:e.content&&e.glyph||e.content?16:0},onClick:e.disabled?()=>{}:e.onClick,cornerRadius:i.themes[e.theme].controls.ghost.default.cornerRadius,hoverStyle:e.disabled?void 0:i.themes[e.theme].controls.ghost.hover,horizontalAlignItems:"center",verticalAlignItems:"center"},e.glyph&&figma.widget.h(Be,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(q,{glyph:e.glyph,color:e.disabled?i.themes[e.theme].txt.minor.default.color:i.themes[e.theme].txt[e.variant?e.variant:"primary"].default.color})),e.content&&figma.widget.h(Me,h(l({},i.themes[e.theme].typo.p6),{fill:e.disabled?i.themes[e.theme].txt.minor.default.color:i.themes[e.theme].txt[e.variant?e.variant:"primary"].default.color}),e.content))}var y=We;var{widget:Ge}=figma,{AutoLayout:O,Frame:Se}=Ge;function Ze(e){let n=e.positionUp!==void 0||e.positionDown!==void 0||e.deleting!==void 0;return figma.widget.h(O,{key:e.key,name:"Item",direction:"horizontal",spacing:0,padding:e.padding?e.padding:i.themes[e.theme].layout.item,width:"fill-parent"},figma.widget.h(O,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},e.children),figma.widget.h(Se,{height:32,width:1}),n&&figma.widget.h(O,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},e.positionUp!==void 0&&figma.widget.h(y,{theme:e.theme,glyph:"chevronUp",disabled:!e.positionUp,onClick:()=>{var o;return(o=e.onPositionChange)==null?void 0:o.call(e,{direction:"up"})}}),e.positionDown!==void 0&&figma.widget.h(y,{theme:e.theme,glyph:"chevronDown",disabled:!e.positionDown,onClick:()=>{var o;return(o=e.onPositionChange)==null?void 0:o.call(e,{direction:"down"})}}),e.deleting!==void 0&&figma.widget.h(y,{theme:e.theme,glyph:"minus",disabled:e.deleting,onClick:()=>{var o;return(o=e.onDelete)==null?void 0:o.call(e)}})))}var Q=Ze;var{widget:Pe}=figma,{Rectangle:$e}=Pe;function Ye(e){return figma.widget.h($e,{width:"fill-parent",height:1,fill:i.themes[e.theme].border.divider.fill})}var B=Ye;var Ne=e=>{let n=o=>(new Date().getMilliseconds()*100*o).toString(16);return n(e?1*e:1)+"-"+n(e?2*e:2)+"-"+n(e?4*e:4)+"-"+n(e?6*e:6)},M=Ne;var{widget:ee}=figma,{AutoLayout:te,Frame:kt,Text:xt,Input:Tt,Rectangle:It,Image:Rt,SVG:At,Ellipse:_t,Line:Vt,Fragment:ie,useSyncedState:W,useSyncedMap:pt,usePropertyMenu:Ue,useEffect:je,useStickable:Dt,useStickableHost:Ft,useWidgetId:Ht,register:zt,waitForTask:Ot}=ee;function Ke(){let[e,n]=W("data",{title:"1.0.0",date:new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),isDescriptionVisible:!0,isEditingVisible:!0,description:"",colorTheme:"light"}),[o,R]=W("entryType",Object.keys(u)[0]),[a,m]=W("entries",new Array({uuid:M(),position:0,type:Object.keys(u)[0],content:""}));je(()=>{(e.isDescriptionVisible===void 0||e.isEditingVisible===void 0)&&n(l(l(l({},e),e.isDescriptionVisible===void 0?{isDescriptionVisible:!0}:{}),e.isEditingVisible===void 0?{isSortingVisible:!0}:{}))}),Ue([{itemType:"link",tooltip:"Help & Documentation",propertyName:"help",href:`${V.website}?utm_superlink=widget_${V.name}_propertyMenu_${V.version}`,icon:L.info(i.themes.light.txt.minor.default.color)},{itemType:"separator"},{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!e.isEditingVisible,icon:L.editingNo(e.isEditingVisible?i.themes.light.txt.minor.default.color:i.themes.light.txt.primary.inverted.color)},...e.isEditingVisible?[{itemType:"separator"},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:e.colorTheme==="dark",icon:L.darkmode(e.colorTheme==="dark"?i.themes.light.txt.primary.inverted.color:i.themes.light.txt.minor.default.color)},{itemType:"separator"},{itemType:"dropdown",tooltip:"New entry type",propertyName:"entryType",options:Object.keys(u).map(t=>({option:t,label:u[t].label})),selectedOption:o},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:L.plus(i.themes.light.txt.minor.default.color)}]:[]],({propertyName:t,propertyValue:d})=>{t==="isDescriptionVisible"&&w(),t==="isEditingVisible"&&A(),t==="colorTheme"&&_(),t==="entryType"&&R(d),t==="addEntry"&&v(o)});let w=()=>{n(h(l({},e),{isDescriptionVisible:!e.isDescriptionVisible}))},A=()=>{n(h(l({},e),{isEditingVisible:!e.isEditingVisible}))},_=()=>{n(h(l({},e),{colorTheme:e.colorTheme==="dark"?"light":"dark"}))},v=t=>{let d=M();a.filter(c=>c.uuid===d).length?v(t):m([...a,{uuid:d,position:a[a.length-1].position+1,type:t,content:""}])},C=(t,d)=>{n(h(l({},e),{[t]:d}))},ne=(t,d)=>{let c=a.findIndex(F=>F.uuid===t.uuid),b=d==="up"?c-1:c+1,E=[...a],de=E.splice(c,1)[0];E.splice(b,0,de),m(E.map((F,ae)=>h(l({},F),{position:ae})))},oe=t=>{m([...a.filter(d=>d.uuid!==t.uuid)].map((d,c)=>h(l({},d),{position:c})))},le=(t,d)=>{m([...a.filter(c=>c.uuid!==t.uuid),h(l({},t),{content:d})])},re=(t,d)=>{let c=Object.keys(u),b=c.indexOf(d)+1;b===c.length&&(b=0),m([...a.filter(E=>E.uuid!==t.uuid),h(l({},t),{type:c[b]})])};return figma.widget.h(te,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:i.themes[e.colorTheme].radius.container.cornerRadius,fill:i.themes[e.colorTheme].layer.default.fill,width:800,effect:i.themes[e.colorTheme].shadow.container},figma.widget.h(U,{theme:e.colorTheme,title:e.title,isDescriptionVisible:e.isEditingVisible?e.isDescriptionVisible:e.isDescriptionVisible&&Boolean(e.description.length),description:e.description,disabled:!e.isEditingVisible,onTitleEditEnd:t=>C("title",t.characters),onDescriptionEditEnd:t=>C("description",t.characters),suffix:e.isEditingVisible||Boolean(e.date.length)?figma.widget.h(f,{theme:e.colorTheme,variant:{typo:"p5",txt:"secondary"},content:e.date,placeholder:"...",disabled:!e.isEditingVisible,onEditEnd:t=>C("date",t.characters),style:{width:200,textAlign:"right"}}):[]}),figma.widget.h(B,{theme:e.colorTheme}),figma.widget.h(te,{name:"Widget__list",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},a.sort((t,d)=>t.position-d.position).map(t=>figma.widget.h(Q,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?t.position!==0:void 0,positionDown:e.isEditingVisible?t.position!==a.length-1:void 0,deleting:e.isEditingVisible?t.position===0&&a.length===1:void 0,onPositionChange:d=>ne(t,d.direction),onDelete:()=>oe(t)},figma.widget.h(X,{key:t.uuid,theme:e.colorTheme,type:u[t.type].status,contentBody:t.content,placeholderBody:"Type something...",disabled:!e.isEditingVisible,contentTag:u[t.type].label,onEditEnd:d=>le(t,d.characters),onTypeChange:()=>e.isEditingVisible?re(t,t.type):null})))),e.isEditingVisible&&figma.widget.h(ie,null,figma.widget.h(B,{theme:e.colorTheme}),figma.widget.h(j,{theme:e.colorTheme},figma.widget.h(ie,{key:"Footer__actions"},figma.widget.h(y,{key:"Footer__action_showDescription",theme:e.colorTheme,variant:"secondary",glyph:e.isDescriptionVisible?"visible":"hidden",content:"Description",onClick:()=>w()}),figma.widget.h(y,{key:"Footer__action_addEntry",theme:e.colorTheme,variant:"primary",glyph:"plus",content:"Add entry",onClick:()=>v("added")})))))}ee.register(Ke);})();
