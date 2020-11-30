let div = document.querySelector(".Form24")
let form = document.createElement('script')

form.innerText = " (function(w,d,u){\n" +
    "                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);\n" +
    "                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);\n" +
    "        })(window,document,'https://cdn-ru.bitrix24.ru/b1145321/crm/form/loader_829.js');"

form.setAttribute("data-b24-form", "inline/829/bavuxw")
form.setAttribute("data-skip-moving", "true")

console.log(form);

div.appendChild(form)
