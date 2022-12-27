var danhSachChuaNhac = document.querySelector('.listMusic_footer')
var nutMoDanhSachNhac = document.querySelector('.listMusic_header')
var audio = document.querySelector('#audioMain')
var play = document.querySelector('.play')
var pause = document.querySelector('.pause')
var reload = document.querySelector('.control_reload')
var checkClass = document.querySelector('.control_random')
var thanhTua = document.querySelector('#currenTimeMusic')
var checkList  = document.querySelector('#checkList')

var app = {

    indexMusic: 0,
    
    listMusic: [
        {
            name: 'Đi Đi Đi',
            singer: 'Remix',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/maxresdefault.jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/Mashup Nevada x Đi Đi Đi _ Daniel Mastro Mashup Remix _ Bản Mashup Hay Nhất 2018_Ly4pp6um_mw.mp3'
        },
        {
            name: 'Never Die',
            singer: 'LMHT',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/large_1594282980303.jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/Legends Never Die (ft. Against The Current) _ Worlds 2017 - League of Legends_r6zIGXun57U.mp3'
        },
        {
            name: 'That Girl',
            singer: 'TickTok',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/sddefault (1).jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/[Vietsub + Kara] That Girl - Olly Murs (lyrics) - Tik Tok_f_LgWgzCPnQ.mp3'
        },
        {
            name: 'Rise',
            singer: 'LMHT',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/sddefault (2).jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/RISE (ft. The Glitch Mob, Mako, and The Word Alive) _ Worlds 2018 - League of Legends_fB8TyLTD7EE.mp3'
        },
        {
            name: 'Top 15 TickTok',
            singer: 'TickTok',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/ticktok.png',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/Tik Tok Hits - 15 Bản Nhạc Tik Tok Tiếng Anh (US - UK) Gây Nghiện Hay _ Viral songs on tiktok_DejaM9DS-Zw.mp3'
        },
        {
            name: 'Bao Lâu Ta Lại Yêu Một Người',
            singer: 'Doãn Hiếu',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/sddefault.jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/Bao Lâu Ta Lại Yêu Một Người l Doãn Hiếu_y_-1uiB2T9Y.mp3'
        },
        {
            name: 'THÍCH ANH RỒI ĐẤY',
            singer: 'HANNIE',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/sddefault (3).jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/HANNIE - THÍCH ANH RỒI ĐẤY _ Official Music Video_o7zkZek9hww.mp3'
        },
        {
            name: 'Darkside',
            singer: 'Alan Walker',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/sddefault (4).jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/Alan Walker - Darkside (feat. Au_Ra and Tomine Harket)_M-P4QBt-FWw.mp3'
        },
        {
            name: 'SAU TẤT CẢ',
            singer: 'ERIK',
            linkImg: 'https://creativephu.github.io/audioMusic/imgMusic/sddefault (5).jpg',
            linkMusic: 'https://creativephu.github.io/audioMusic/mp3Music/ERIK - SAU TẤT CẢ _ Official Music Video_wHF3Jv6Gk2o.mp3'
        }
    ],




    taoDanhSachNhac: function(){
        var htmlDanhSach = this.listMusic.map(function(phanTu){
            return `
            <div class="music">
                <div class="imgMusic">
                    <img src="${phanTu.linkImg}" class="imgMS">
                </div>
                <div class="contentMusic">
                    <h4 class="msName">${phanTu.name}</h4>
                    <h5 class="sgname">${phanTu.singer}</h5>
                </div>
            </div>           
            `
        })
        danhSachChuaNhac.innerHTML = htmlDanhSach.join('')
    },


    suKienMoDanhSachNhac: function(){
        nutMoDanhSachNhac.onclick = function(){
            if(checkList.checked === false){
                danhSachChuaNhac.style.display = 'block'
                checkList.checked = true
            }else{
                danhSachChuaNhac.style.display = 'none'
                checkList.checked = false
            }
        }
    },



    layNhacTheoIndex: function(){
        var tenTacGia = document.querySelector('.nameSinger')
        var tenBaiHat = document.querySelector('.nameMusic')
        var anhCD = document.querySelector('.imgcdMusic')

        tenTacGia.textContent = this.listMusic[this.indexMusic].singer
        tenBaiHat.textContent = this.listMusic[this.indexMusic].name
        anhCD.src = this.listMusic[this.indexMusic].linkImg
        audio.src = this.listMusic[this.indexMusic].linkMusic
    },



    choiNhac: function(){
        play.onclick = function(){
            audio.play()
            play.style.display = 'none'
            pause.style.display = 'block'
        }
    },



    dungChoiNhac: function(){
        pause.onclick = function(){
            audio.pause()
            play.style.display = 'block'
            pause.style.display = 'none'
        }
    },



    chuyenNhac: function(){
        var chuyenTiep = document.querySelector('.forward')
        chuyenTiep.onclick = function(){
            app.indexMusic+=1
            if(app.indexMusic > app.listMusic.length-1){
                app.indexMusic = 0
            }
            app.layNhacTheoIndex()
            play.style.display = 'none'
            pause.style.display = 'block'
            audio.play()
            app.selectListMS()
        }
    },



    chuyenNhacLui: function(){
        var chuyenVe = document.querySelector('.rewind')
        chuyenVe.onclick = function(){
            app.indexMusic-=1
            if(app.indexMusic < 0){
                app.indexMusic = app.listMusic.length-1
            }
            app.layNhacTheoIndex()
            play.style.display = 'none'
            pause.style.display = 'block'
            audio.play()
            app.selectListMS()
        }
    },


    tuDongChuyenBaiMain: function(){
        app.indexMusic+=1
        if(app.indexMusic > app.listMusic.length-1){
            app.indexMusic = 0
        }
        app.layNhacTheoIndex()
        audio.play()
        app.selectListMS()
    },


    phatLaiNhac: function(){
        reload.onclick = function(){
            if(checkClass.classList.contains('color_control')){
                audio.removeEventListener('ended',app.tuDongChuyenBaiMain)
                checkClass.classList.remove('color_control')
            }


            if(audio.loop == false){
                reload.classList.add('color_control')
                audio.loop = true
            }else{
                reload.classList.remove('color_control')
                audio.loop = false
            }
        }
    },



    tuDongChuyenBai: function(){
        var random = document.querySelector('.random')

        random.onclick = function(){
            audio.loop = false
            reload.classList.remove('color_control')
            if(checkClass.classList.contains('color_control')){
                audio.removeEventListener('ended',app.tuDongChuyenBaiMain)
                checkClass.classList.remove('color_control')
            }else{
                checkClass.classList.add('color_control')
                audio.addEventListener('ended', app.tuDongChuyenBaiMain)
            }
        }
    },




    layThoiGianDaChay: function(){
        var timeLeft = document.querySelector('.timeLeft')
        var timeRight = document.querySelector('.timeRight')
        audio.onloadedmetadata  = function(){
            audio.ontimeupdate = function(){
                var A = `${Math.floor(audio.currentTime/60)<=0?'00':Math.floor(audio.currentTime/60)>=10?Math.floor(audio.currentTime/60):'0'+Math.floor(audio.currentTime/60)}`
                var B = `${Math.floor(audio.currentTime%60)<=0?'00':Math.floor(audio.currentTime%60)>=10?Math.floor(audio.currentTime%60):'0'+Math.floor(audio.currentTime%60)}`

                var C = `${Math.floor(audio.duration/60)<=0?'00':Math.floor(audio.duration/60)>=10?Math.floor(audio.duration/60):'0'+Math.floor(audio.duration/60)}`
                var D = `${Math.floor(audio.duration%60)<=0?'00':Math.floor(audio.duration%60)>=10?Math.floor(audio.duration%60):'0'+Math.floor(audio.duration%60)}`
                timeLeft.textContent = `${A}:${B}`
                timeRight.textContent = `${C}:${D}`
                thanhTua.max = audio.duration
                thanhTua.value = audio.currentTime
            }
        }
    },



    suKienThanhTuaNhac: function(){
        thanhTua.onclick = function(){
            audio.currentTime = this.value
        }
    },



    fixLoiChayHetNhacKhongChuyenStart: function(){
        audio.onended = function(){
            if(!checkClass.classList.contains('color_control')){
                play.style.display = 'block'
                pause.style.display = 'none'
            }
        }
    },



    clickListMusic: function(){
        app.returnListMS().forEach(function(element, index){

            element.onclick=function(e){
                app.returnListMS().forEach(function(element1){
                    var checkSelect = element1.classList.contains('color_control')
                    if(checkSelect){
                        element1.classList.remove('color_control')
                    }
                })

                app.indexMusic = index
                app.layNhacTheoIndex()

                element.classList.add('color_control')
                checkList.checked = false
                danhSachChuaNhac.style.display = 'none'

                audio.play()
                play.style.display = 'none'
                pause.style.display = 'block'

            }
        })
    },



    returnListMS: function(){
        var a = document.querySelectorAll('.music')
        return a
    },



    selectListMS: function(){
        app.returnListMS().forEach(function(element1){
            var checkSelect = element1.classList.contains('color_control')
            if(checkSelect){
                element1.classList.remove('color_control')
            }
        })
        console.log(app.returnListMS())
        app.returnListMS()[app.indexMusic].classList.add('color_control')

    },


    start: function(){
        this.taoDanhSachNhac()

        this.suKienMoDanhSachNhac()

        this.layNhacTheoIndex()

        this.choiNhac()

        this.dungChoiNhac()

        this.chuyenNhac()

        this.chuyenNhacLui()

        this.phatLaiNhac()

        this.tuDongChuyenBai()

        this.layThoiGianDaChay()

        this.suKienThanhTuaNhac()

        this.fixLoiChayHetNhacKhongChuyenStart()

        this.clickListMusic()

        this.selectListMS()
    }
}

app.start()
