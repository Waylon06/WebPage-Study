
        window.onload = function () {
            setInterval(() => {
                var dt = new Date();
                var HH = dt.getHours();
                var mm = dt.getMinutes();
                var ss = dt.getSeconds();

                document.querySelector('#HH').innerHTML = padZero(HH);
                document.querySelector('#mm').innerHTML = padZero(mm);
                document.querySelector('#ss').innerHTML = padZero(ss);
            }, 1000)
            
            // 补零函数
            function padZero(n) {
                return n > 9 ? n : '0' + n;
            }

        }


    