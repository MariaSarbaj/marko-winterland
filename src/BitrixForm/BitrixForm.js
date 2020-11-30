// import React,{Component} from "react";
// import ReactDOM from "react-dom";
//
//
// class BitrixForm extends Component {
//     componentDidMount() {
//         const script = document.createElement("script");
//         script.async = false;
//         script.src = 'https://markoby.bitrix24.ru/bitrix/js/crm/form_loader.js';
//         this.div.appendChild( (function(w,d,u,b){w['Bitrix24FormObject']=b;w[b] = w[b] || function(){arguments[0].ref=u;
//             (w[b].forms=w[b].forms||[]).push(arguments[0])};
//             if(w[b]['forms']) return;
//             var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());
//             var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
//         })(window,document,'https://markoby.bitrix24.ru/bitrix/js/crm/form_loader.js','b24form');
//
//         b24form({"id":"829","lang":"ru","sec":"bavuxw","type":"inline"}););
//     }
//     render() {
//         return (
//             <div className="Form" ref={el => (this.div = el)}>
//                 <h1>Hello react</h1>
//                 {/* Script is inserted here */}
//             </div>
//         );
//     }
// }
//
// export default BitrixForm