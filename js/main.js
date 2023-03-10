const root = ReactDOM.createRoot(document.querySelector('#main'));
const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('lang');

const LogOut = () => {
    sessionStorage.removeItem('uid')
    location.reload();
}

let logoutText = 'Log Out'

function LogOutBtn() {

    React.useState(() => {
        // console.log(logoutText);
    }, [logoutText])

    return (
        <div className="d-flex flex-column logout-btn">
            <div className="d-flex flex-column">
                <p style={{
                    marginTop: '0.3%',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                }}>User: {sessionStorage.getItem('userName')}</p>
            </div>
            <button className="btn btn-secondary" onClick={LogOut}>
                {logoutText}
            </button>
        </div>
    )
}

function DarkModeToggle() {
    const ChangeTheme = () => {
        document.body.classList.toggle('dark');
        document.querySelector('.link').classList.toggle('dark');
    }

    return (
        <div className='changeTheme'>
            <input type="checkbox" class="checkbox" onChange={ChangeTheme}
                id="checkbox" />
            <label for="checkbox" class="label">
                <i class="fas fa-moon"></i>
                <i class='fas fa-sun'></i>
                <div class='ball'></div>
            </label>
        </div>
    )
}

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <a href="./" className="link">
                    Mik Tae_ 2022 Review
                </a>
                <DarkModeToggle></DarkModeToggle>
            </div>

            <LogOutBtn></LogOutBtn>
        </div>
    )
}

const source = [
    {
        type: 'image',
        title: 'Dreams of Love',
        soundURL: './assets/sounds/DoanKetMoi.mp3',
        soundName: '??o???n K???t M???i - Ho??ng D??ng',
        soundStartAt: 21,
        // transform: 'X',
        detail:
            `Trong n??m nay, v???i s??? kh???i ?????u l?? t??nh y??u t??? m???t dancer 
             . D?? ???? l?? qu?? kh???, nh??ng ????y c??ng l?? m???t g??c khung tr???i. 
            `,
        velocity: 0.01,
        src: './assets/LuvDream/0.jpg'
    },
    {
        type: 'image',
        title: '?????i h???i Th??? thao ????ng Nam ?? 2022 (2022 Southeast Asian Games)',
        // transform: 'X',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "H??y T???a S??ng (Let's Shine) - Huy Tu???n",
        soundStartAt: 46,
        detail:
            `SEA Games 31 l?? m???t s??? ki???n th??? thao ??a m??n di???n ra ??? H?? N???i,
             Vi???t Nam v??o n??m 2022. Ban ?????u d??? ki???n t??? ch???c t??? ng??y 21 th??ng
              11 ?????n ng??y 2 th??ng 12 n??m 2021, ?????i h???i d???i ng??y t??? ch???c 
              sang t??? ng??y 12 ?????n ng??y 23 th??ng 5 n??m 2022 do ???nh h?????ng 
              c???a ?????i d???ch COVID-19. C?? 40 m??n th??? thao, ch??? y???u l?? nh???ng 
              m??n th??? thao ???????c thi ?????u t???i ?????i h???i Th??? thao ch??u ?? v??
               Th??? v???n h???i.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/0.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "H??y T???a S??ng (Let's Shine) - Huy Tu???n",
        soundStartAt: 54,
        // transform: 'X',
        detail:
            `R???t vinh d??? v?? t??? h??o khi t??i ???????c tr??? th??nh TNV ????ng g??p
            cho s??? ki???n quy m?? khu v???c n??y. 
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "H??y T???a S??ng (Let's Shine) - Huy Tu???n",
        soundStartAt: 62,
        // transform: 'X',
        detail:
            `T??i ???????c g???p c??c V??V ????ng Nam ??, Vi???t Nam nh?? ?????i tuy???n 
            Vi???t Nam, Nguy???n Huy Ho??ng _ anh n??y ??i???n trai c???c,
            Nguy???n Th??? Oanh, ... . C??ng v???i ????,
            ???????c chia s??? n???n v??n h??a Vi???t v???i c??c b???n n?????c ngo??i. 
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/2.jpg'
    },
    {
        type: 'video',

        // transform: 'X',
        detail:
            `V?? r???t vinh d??? ???????c g???p c??c B??c l??nh ?????o ?????ng, Th??nh ph???
             nh?? Th??? t?????ng Ph???m Minh Ch??nh, c??c b??? tr?????ng c??c qu???c gia.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/3.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundStartAt: 70,
        // transform: 'X',
        detail:
            `Gi???y ch???ng nh???n cho nh???ng ????ng g??p cho ?????i h???i????
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/Cer.png'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 24,
        title: 'TOEIC',
        // transform: 'X',
        detail:
            `TOEIC, vi???t t???t c???a Test of English for 
            International Communication ??? B??i ki???m tra ti???ng Anh 
            giao ti???p qu???c t???, l?? m???t ch???ng ch??? ti???ng Anh qu???c t???.
             \n May m???n ???????c ch??? Thanh L??, b???n To??n Ph???m h?????ng d???n,
              h??? tr??? t??i trong qu?? tr??nh ??n thi ch???ng ch??? qu???c t??? n??y. 
              Nh??? s??? h?????ng d???n c??ng nh?? k??? n??ng, n??ng l???c b???n th??n, t??i c??ng c??
              s??? ??i???m nho nh???.
            `,
        velocity: 0.001,
        link: 'https://www.facebook.com/ImaxToeic',
        linkText: 'Imax Toeic',
        src: './assets/TOEIC/toeic.jpg'
    },
    {
        type: 'video',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 30,
        title: 'Nghi??n c???u khoa h???c',

        // transform: 'X',
        detail:
            `V???i ch??? ????? ??p d???ng k??? thu???t X??? l?? ???nh, Tr?? tu??? nh??n t???o 
trong ph??n lo???i hoa qu???, nh??m t??i ???? ??o???t gi???i Nh?? c???p tr?????ng.
C???m ??n th???y Nam v?? nh??m nghi??n c???u: c??c anh Thi??n, ????o Anh, v?? Th???y ???!
            `,
        velocity: 0.001,
        src: './assets/NCKH/1.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 36,
        title: 'Nghi??n c???u khoa h???c',
        // transform: 'X',
        detail:
            `Code c?? ????? ph???c t???p cao khi t??ch h???p ph???n c???ng v?? ph???n m???m.
            ??i???u khi???n PLC, kh?? n??n, l???p tr??nh Python v?? l???p tr??nh Web ???????c 
            ??p d???ng v??o ????? t??i.
            `,
        velocity: 0.001,
        src: './assets/NCKH/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 42,
        detail:
            `Tuy kh??ng ?????t gi???i Nh???t nh??ng c??ng ???????c gi???i Nh??.
            `,
        // transform: 'X',
        velocity: 0.001,
        src: './assets/NCKH/Cer.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Dreamers.mp3',
        soundName: "Dreamers - Jung Kook ft Fahad Al-Kubaisi ",
        soundStartAt: 18,
        title: 'SAMSUNG SVMC ??? CH????NG TR??NH TH???C T???P SINH K??? H?? 2022',
        // transform: 'X',
        detail:
            `SVMC Internship Program l?? ch????ng tr??nh ???????c t??? ch???c h??ng n??m c???a SVMC Samsung.
            ????y l?? ch????ng tr??nh r???t thi???t th???c, ?? ngh??a d??nh cho c??c b???n sinh vi??n n??m cu???i ho???c g???n cu???i. Tham gia ch????ng tr??nh, sinh vi??n ???????c h??? th???ng l???i, ????o t???o b??i b???n v??? thu???t to??n c?? b???n;
             ???????c ????o t???o v?? tham gia l??m c??c mini-project v???i c??c s???n ph???m ?????u ra c??? th??? tr??n n???n t???ng Android ho???c C/C++ Application.
            Ngo??i ra, sinh vi??n c??ng ???????c tham gia tr???i nghi???m v??n h??a l??m vi???c c???a m???t trung t??m c??ng ngh??? h??ng ?????u c???a Samsung, ???????c h?????ng d???n v??? c??c k??? n??ng c???n thi???t tr??n Microsoft Office. `,
        velocity: 0.001,
        src: './assets/SamSungIntern/Paper.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Dreamers.mp3',
        soundName: "Dreamers - Jung Kook ft Fahad Al-Kubaisi ",
        soundStartAt: 24,
        detail:
            `T??i ???? c?? c?? h???i th???c t???p t???i SVMC( nay l?? SRV ) v???i c??c b???n UET, PTIT, ... 
            v???i profile c???c x???n, c??c anh ch??? nhi???t t??nh h??? tr???. ?????c bi???t c???m ??n
            c??c b???n L?? Qu??n UET, Quang PTIT
             v?? 2 anh Tu???n HR v?? Training
            V?? l?? do b???o m???t v?? ??t ch???p ???nh,
            n??n h??i ??t h??nh ???nh :))) `,
        velocity: 0.01,
        src: './assets/SamSungIntern/Costume.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Dreamers.mp3',
        soundName: "Dreamers - Jung Kook ft Fahad Al-Kubaisi ",
        soundStartAt: 30,
        detail:
            ` B??i Test ki???m tra kh?? v?? c??ng. :))) C?? 3 b???n ?????, c??? l???p thi l???i.
            Thu???t to??n kh??ng h??? d??? nh?? ?????t 10 ph???y l???p tr??nh C, C++ ??? Tr?????ng`,
        velocity: 0.01,
        src: './assets/SamSungIntern/TestR.jpg'
    },
    {
        type: 'image',
        detail:
            `D?? ???? k???t th??c, nh??ng ????y l?? tr???i nghi???m ????ng nh??? c???a t??i 
            t???i t???p ??o??n h??ng ?????u th??? gi???i. ?????ng ??? t???ng 20 s??? 1 Ph???m V??n 
            B???ch l?? m???t ph???n ?????c m?? c???a t??i.
            C???m ??n t???p ??o??n Chaebol SamSung, trung t??m SVMC(nay l?? SRV) ^^ `,
        velocity: 0.01,
        src: './assets/SamSungIntern/Cer.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Sad.mp3',
        soundName: "Sad ",
        title: 'S??? m???t m??t ?????u ti??n',
        detail:
            `V?? trong k??? th???c t???p, t??i ph???i ch???ng ki???n c???nh ra ??i
            c???a ng?????i B??c y??u th????ng. M???i th??? th???t l?? v?? th?????ng . ????`,
        velocity: 0.01,
        src: './assets/Funeral/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/MOS/sound.mp3',
        title: 'MOS (Microsoft Office Specialist)',
        // transform: 'X',
        detail:
            `MOS (Microsoft Office Specialist) l?? b??i thi v??? k??? n??ng Tin h???c V??n ph??ng ???????c tri???n khai b???i T???p ??o??n kh???o th?? Tin h???c h??ng ?????u th??? gi???i ??? Certiport (Hoa K???) v?? ??ang ???????c ??p d???ng tr??n 150 qu???c gia v?? v??ng l??nh th??? tr??n th??? gi???i. 
            Ch???ng ch??? MOS do ch??nh T???ng Gi??m ?????c Microsoft k?? t??n v?? c?? gi?? tr??? v?? th???i h???n tr??n to??n c???u. T???i Vi???t Nam, Ch???ng ch??? MOS ???? ???????c B??? Th??ng tin v?? Truy???n th??ng c??ng nh???n t????ng ??????ng chu???n k??? n??ng CNTT n??ng cao quy ?????nh trong th??ng t?? 03/BTTTT-CNTT c???a B??? Th??ng tin v?? Truy???n th??ng.. `,
        velocity: 0.001,
        src: './assets/MOS/W.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/MOS/sound.mp3',
        // transform: 'X',
        detail:
            `C???m ??n Trung t??m 
            10Education ???? h??? tr???. ????y l?? ch???ng ch??? 
            qu???c t??? ch???ng minh n??ng l???c tin h???c v??n ph??ng cho 
            c?? nh??n t??i` ,
        link: 'http://10education.vn/',
        linkText: 'Trung t??m 10Education',
        velocity: 0.01,
        src: './assets/MOS/E.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Sad.mp3',
        title: 'My grandmother had gone',
        // transform: 'X',
        detail:
            `Trong n??m nay, t??i la??? th??m l???n n???a ch???ng ki???n
            c???nh xa bi???t ??m d????ng ng?????i th??n. ???? l?? ng?????i b?? n???i 
            ????ng k??nh c???a t??i. 
             Haizz.... tuy v???y, ????y c??ng c?? l??? giai ??o???n bu???n nh???t,
             c??ng ty M, v???i kh??ch h??ng h??m c??n ??p g???i ??i???n ????m 
             h??m ????? ch??? b??i con h???, ????ng l?? ????? m???t n??o.
            `,
        velocity: 0.001,
        src: './assets/Funeral/2.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Sad.mp3',
        soundName: "Sad",
        title: 'Nh???ng th???t b???i...',
        // transform: 'X',
        detail:
            `Trong n??m nay, c?? nh???ng s??? th???t b???i, nu???i ti???c nh?? tr?????t
            h???c b???ng danh gi?? SamSung(STP 2022), thi tr?????t Olympic 
            L??, tr?????t PanaSonic Fresher 2022, ...
            Kh??ng ph???i nh???ng g?? t??i c?? ???????c l?? d??? d??ng. 
            `,
        velocity: 0.001,
        src: './assets/Career/stp.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        soundName: "Fashion",
        title: ' Aquafina Vietnam International Fashion Week Fall/Winter (AVIFW 2022) ',
        // transform: 'X',
        detail:
            `V???i ch??? ????? TasteOfHeritage - C???m h???ng di s???n, show di???n l???n nh???t l??ng th???i trang Vi???t Nam d???p cu???i n??m Tu???n l??? Th???i trang Qu???c t??? Vi???t Nam Thu ????ng 2022 - Aquafina Vietnam International Fashion Week Fall/Winter (AVIFW 2022). 
        ???????c nh???n ?????nh l?? m???t trong nh???ng Tu???n l??? Th???i trang qu???c t??? ?????ng ?????u khu v???c ????ng Nam ?? v?? ?????ng th??? 4 ch??u ?? ch??? sau Tokyo, Seoul v?? Shanghai International fashion week, AVIFW 2022 ???????c v?? nh?? c???u n???i gi???a xu h?????ng th???i trang Vi???t Nam v?? th??? gi???i. `,
        velocity: 0.01,
        src: './assets/AFIFW_2022/main.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        soundName: "Fashion",
        detail:
            `T??i may m???n c?? c?? h???i tham gia ch????ng tr??nh v???i 
        t?? c??ch C???ng t??c vi??n S???n Xu???t. ????ng g??p d??n d???ng s??n kh???u, k???ch b???n
         v?? c??c c??ng vi???c hi???n tr?????ng`,
        velocity: 0.01,
        src: './assets/AFIFW_2022/zalo.png'
    },
    {
        type: 'video',
        soundURL: './assets/sounds/Fashion.mp3',
        soundName: "Fashion",
        detail: `C??ng h???p t??c v???i Multi Media JSC, B??i Minh Ti???n. 
        ???????c g???p g??? nh???ng ng?????i m???u, di???n vi??n, ng?????i n???i ti???ng nh?? M???c
        Trung Ki??n, H'Hen Ni??,V?? Ho??ng Y???n, 
         Nguy???n Minh Kha,Ho??i Anh, 
         Xu??n Lan, Kh??nh V??n, ...`,
        velocity: 0.01,
        src: './assets/AFIFW_2022/mactrungkien.mp4'
    },
    {
        type: 'video',
        velocity: 0.01,
        src: './assets/AFIFW_2022/hhnie_catwalk.mp4'
    },
    {
        type: 'video',
        velocity: 0.01,
        src: './assets/AFIFW_2022/mk.mp4'
    },
    {
        type: 'video',
        velocity: 0.01,
        src: './assets/AFIFW_2022/ha.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        soundURL: './assets/sounds/Fashion.mp3',
        velocity: 0.01,
        src: './assets/AFIFW_2022/se.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        velocity: 0.01,
        src: './assets/AFIFW_2022/cer.png',
        stopSound: true
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: 'Yet To Come - Jung Kook ft Fahad Al-Kubaisi ',
        title: 'Hum...',
        detail: `N??m nay, c?? k??? th???c t???p t???i tr?????ng ?????i h???c. D?? r???t mu???n
        l??m vi???c t???i c??c c??ng ty ph??c l???i t???t nh??ng v?? nhi???u l?? do 
        kh??c nhau th?? ???? t??? ch???i c?? h???i n??y.`,
        velocity: 0.01,
        src: './assets/Career/foxconn.jpg',
        stopSound: true
    },
    {
        type: 'image',
        lastView: true,
        detail: `C??c v??? tr?? tr??ng tuy???n g???m:
         RnD t???i LG, A.I t???i Foxconn, Embeded t???i HCL, ... `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/Career/lginnotek.jpg',
    },
    {
        type: 'image',
        lastView: true,
        detail: `Job kh??c c?? review kh??ng t???t`,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/Career/hcl.jpg',
    },
    {
        type: 'image',
        title: "FPT Software Development and Trip",
        detail: `T???p ??o??n FPT v???i ch????ng tr??nh HolaPark, t??i tr??? to??n ph???n
         FreeCodeCamp tr??? gi?? 2x tri???u `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/HolaPark/View.jpg',
    },
    {
        type: 'video',
        detail: `PTIT ??i ????u c??ng g???p :))) `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/HolaPark/r.mp4',
    },
    {
        type: 'image',
        lastView: true,
        detail: `???????c g???p g???, k???t giao c??c chuy??n gia l???n c???a Google
        , Meta, ... `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/HolaPark/f.jpg',
    },
    {
        detail: `Cu???i c??ng, n??m 2022 l?? n??m ?????y tr???i nghi???m ????ng nh???, 
        ?????t ???????c c??c ch???ng ch???, k??? n??ng ???n. Nh??ng ????y l?? n??m c???a s??? m???t m??t
        khi ph???i ?????i kh??n tang ?????n 2 l???n. ????y l?? n??m
         ch???m d???t m???t ph???n ho???c to??n ph???n c??c m???i quan h??? kh??ng ?????u v??o ????u v?? 
         toxic, ????n nh???n c??c v??ng tr???i m???i ??a di???n h??n.
         C???m ??n b???n, ng?????i ??ang xem v?? ???? d??nh th?? gi??? c???a b???n cho t??i.
         Ch??c m???ng n??m m???i t???i b???n v?? ng?????i b???n tr??n tr???ng. `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: "https://img.freepik.com/free-vector/thank-you-word-doodle-typography-lettering_53876-116957.jpg?w=2000"
    },

]

function TabBar() {
    let trlts = React.useRef()

    React.useEffect(() => {
        new google.translate.TranslateElement({
            pageLanguage: 'vi'
        },
            trlts.current);
    }, [])

    return (
        <div className="tab-bar" >
            <div className="tab-bar-inner">
                <a href="./">2022 Review - Mik Tae</a>
            </div>
            <div className="tab-bar-inner">
                <i className="fa fa-home"></i>
                <a href="./"> Home </a>
            </div>
            <div className="tab-bar-inner">
                <i class="fa-solid fa-gifts"></i>
                <a href="#thanks"> Thanks </a>
            </div>
            <div className="tab-bar-inner">
                <i class="fa-solid fa-message"></i>
                <a href="./pages/sendMessage.html"> Messages </a>
            </div>
            <div className="tab-bar-inner">
                <i class="fa-solid fa-language"></i>
                <span ref={trlts}></span>
            </div>
        </div>
    )
}

let k = 10

function ListView(props) {
    let list = React.useRef()
    let media = React.useRef()
    let audioRef = React.useRef()
    let like = React.useRef()
    const [nclick, setnClick] = React.useState(0)
    const [expand, setExpand] = React.useState(false)

    let scale = 1, maxScale = 2.5, minScale = 0.5

    const ZoomOn = (event) => {
        if (media.current)
            media.current.style.transform = "scale(" + scale + ")"
        // console.log(scale);
        if (event.deltaY < 0) {
            if (scale <= maxScale)
                scale *= 1.2
            // console.log('scrolling up');

        } else if (event.deltaY > 0) {
            if (scale >= minScale)
                scale /= 1.2
            else
                scale = minScale
            // console.log('scrolling down');
        }
    }

    const Play = () => {
        let isPlaying = audioRef.current.currentTime > 0 &&
            !audioRef.current.paused && !audioRef.current.ended
            && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;
        if (!isPlaying && audioRef.current) {
            audioRef.current.currentTime
                = props.soundStartAt
            audioRef.current.play()
        }
    }

    const Pause = () => {
        let isPlaying = audioRef.current.currentTime > 0 &&
            !audioRef.current.paused && !audioRef.current.ended
            && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;
        if (isPlaying) {
            audioRef.current.pause()
        }
    }

    const Like = (id) => {
        setnClick(nclick + 1)
        console.log(nclick);
        if (!(nclick % 2)) {
            like.current.style.color = 'red'
            like.current.classList.remove("fa-regular")
            like.current.classList.add("fa-solid")
            console.log(id, sessionStorage.getItem('userName'));
        }
        else {
            like.current.style.color = ''
            like.current.classList.remove("fa-solid")
            like.current.classList.add("fa-regular")
            console.log(id, sessionStorage.getItem('userName'));
        }
    }

    const Comment = (id) => {
        window.location.href = './pages/sendMessage.html'
        console.log('cmt', id, sessionStorage.getItem('userName'));
    }

    setInterval(() => {
        k -= props.velocity
        if (list && list.current)
            list.current.style.transform = "translateY(" + k + "px"
    }, 10)

    return (
        <div ref={list} onMouseOver={(e) => {
            e.preventDefault()
            Play()
        }} onMouseOut={() => {
            Pause()
        }}
            className="list-view" id={props.id}>
            {
                props.stopSound && audioRef.current
                && audioRef.current.pause()
            }
            <div className="list-view-main">

                {
                    props.type === 'image'
                        ? <img ref={media} loading="lazy"
                            controlsList="nodownload"
                            src={props.src}
                            alt={props.detail}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                return false
                            }}
                            onWheel={(e) => ZoomOn(e)}
                            onClick={(e) => isTouch(e)} /> :
                        <video controlsList="nodownload" onWheel={(e) => ZoomOn(e)}
                            controls src={props.src}
                            onClick={(e) => isTouch(e)} alt={props.type} />
                }
                <div className="list-view-title">
                    <p>{props.title}</p>
                </div>
                <a style={{
                    fontSize: '1.3rem',
                }} href={props.link}>{props.linkText}</a>
                <div className="list-view-detail">
                    {props.detail && props.detail.length <= 99 ?
                        <p>{props.detail}</p> :
                        <p>
                            {
                                !expand ?
                                    <div>
                                        <p>{props.detail && `${props.detail.substring(0, 99)}...`}
                                            <span onClick={() => setExpand(true)}>
                                                more
                                            </span></p>
                                    </div>
                                    : <p style={{
                                        overflowY: 'scroll',
                                        height: '3rem'
                                    }}
                                        onClick={() => setExpand(false)}>{props.detail}</p>
                            }
                        </p>}

                    {props.soundName && <p>
                        <i className="fas fa-music"></i>
                        &nbsp;
                        <span className="soundname">
                            {props.soundName}</span>
                    </p>}
                </div>
            </div>
            <div className="list-view-emotion">
                <div onClick={() => Like(props.id)}
                    className="list-view-emotion-item">
                    <i ref={like}
                        className="fa-regular fa-heart"
                    ></i>
                    <p> Likes</p>
                </div>
                <div onClick={() => Comment(props.id)}
                    className="list-view-emotion-item">
                    <i className="fa-regular fa-comment"></i>
                    <p> Comments</p>
                </div>
            </div>
            <audio controlsList="nodownload"
                ref={audioRef} id={props.id}>
                <source src={props.soundURL}
                    type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div >
    )
}

ListView.defaultProps = {
    soundStartAt: 0,
    type: 'image',
}

const ThankList = [
    { Name: 'My family, gd, and my fr' },
    { Name: 'SVMC', logoSrc: 'https://uet.vnu.edu.vn/wp-content/uploads/2022/02/45163700_554629941631875_2774204017406902272_n.jpg' },
    { Name: 'ImaxTOEIC', logoSrc: `./assets/logos/ImaxTOEIC.png` },
    { Name: 'The IELTS Workshop', logoSrc: `https://onthiielts.com.vn/wp-content/uploads/2019/04/tiw-logo.png` },
    { Name: 'IIG', logoSrc: './assets/logos/iig.png' },
    { Name: 'FPT Software', logoSrc: 'https://www.fpt-software.com/wp-content/uploads/sites/2/2017/06/logofsoft.png' },
    { Name: 'ETS', logoSrc: './assets/logos/ets.png' },
    { Name: 'Rocket Studio', logoSrc: './assets/logos/rocket.png' },
    { Name: 'Korean Cultural Center', logoSrc: './assets/logos/kcenter.jpg' },
    { Name: 'VinUni', logoSrc: './assets/logos/vinu.png' },
    { Name: 'HAUI', logoSrc: './assets/logos/haui.png' },
    { Name: 'NEU', logoSrc: './assets/logos/neu.png' },
    { Name: 'BachKhoaTech', logoSrc: './assets/logos/bachkhoatech.webp' },
    { Name: 'Le V. Minh' },
    { Name: 'Le T. Thanh' },
    { Name: 'Le T. Quan' },
    { Name: 'Le V. Quan' },
    { Name: 'Duong V. Hai' },
    { Name: 'Pham V. Nam' },
    { Name: 'Pham V. Toan' },
    { Name: 'Ng V. Hoang' },
    { Name: 'Ng D. Tung' },
    { Name: 'Do D. Duong' },
    { Name: 'Bui Q. Viet' },
    { Name: 'Minh Chau' },
    { Name: 'Dinh X. Minh' },
    { Name: 'Au D. Giang' },
    { Name: 'Ng X. Nhat' },
    { Name: 'Ng V. Tuan' },
    { Name: 'Jenni Pham' },
    { Name: 'Hoang Tr. Tuan' },
    { Name: 'Ng M. Hieu' },
    { Name: 'Hoa Bui' },
    { Name: 'Ng H. Ha' },
    { Name: 'Suk J. Won' },
    { Name: 'J. Orlando' },
    { Name: 'Ng A. Dung' },
    { Name: 'Suk J. Young' },
    { Name: 'Others' },
]

function ThankFor(props) {
    let thanks = React.useRef()

    setInterval(() => {
        k -= 0.012
        if (thanks.current)
            thanks.current.style.transform = "translateY(" + k + "px"
    }, 10)

    return (
        <div ref={thanks} id="thanks" className="thanks-view">
            <p style={{
                fontSize: '2em'
            }}>Thanks for </p>
            {props.logoSrc && <img style={{
                width: '60%',
            }} src={props.logoSrc} alt={props.Name} />}
            <p className="thanks-text">
                {props.Name}
            </p>
        </div>
    )
}

function App() {
    return (
        <div className="container-fluid">
            <NavBar></NavBar>
            <TabBar></TabBar>
            {
                source.map((s, i) => (<ListView key={s.src}
                    id={i} title={s.title}
                    soundURL={s.soundURL}
                    soundStartAt={s.soundStartAt}
                    soundName={s.soundName}
                    lastView={s.lastView}
                    link={s.link} linkText={s.linkText}
                    type={s.type} velocity={0.1}
                    detail={s.detail} src={s.src} />))
            }
            {
                ThankList.map((t, i) => (
                    <ThankFor key={i} Name={t.Name}
                        logoSrc={t.logoSrc} />
                ))
            }
        </div>
    )
}

function Modal() {
    return (
        <div className="modal-container">
            <h1>Reminder Modal - H???p nh???c nh???</h1>
            <ol>
                <li>
                    V?? l?? do b???o m???t v?? ri??ng t??,
                    y??u c???u b???n kh??ng r???i kh???i trang web trong qu?? tr??nh xem
                </li>
                <li>Do l?? ?????m b???o b???o m???t, quy???n ri??ng t??,
                    y??u c???u b???n kh??ng s??? d???ng c??c thi???t b??? ghi h??nh,
                    quay video(??i???n tho???i, camera, ...)</li>
                <li>Kh??ng sao ch??p d?????i m???i h??nh th???c</li>
            </ol>
            <ol>
                <li>
                    For security and privacy reasons,
                    you are requested not to leave the site during viewing
                </li>
                <li>For security and privacy reasons,
                    do not use recording and video recording devices (phones, cameras, ...)</li>
                <li>Do not copy in any form</li>
            </ol>
            <ol>
                <li>
                    ?????????????????????????????????????????????????????????????????????
                </li>
                <li>??????????????????????????????
                    ?????????????????????????????????????????????????????????????????????...???</li>
                <li>???????????????????????????</li>
            </ol>
            <ol>
                <li>
                    ??????????????????????????????????????????????????????????????????
                    ??????????????????????????????????????????????????????
                </li>
                <li>????????????????????????????????????????????????????????????
                    ?????????????????????????????????????????? (????????????????????????) ????????????????????????????????????</li>
                <li>?????????????????????????????????????????????????????????</li>
            </ol>
            <ol>
                <li>
                    Por motivos de seguran??a e privacidade,
                    solicitamos que voc?? n??o saia do site durante a visualiza????o
                </li>
                <li>Por quest??es de seguran??a e privacidade, pedimos que n??o utilizem
                    dispositivos de grava????o e grava????o de v??deo (telefones, c??meras, ...)</li>
                <li>N??o copie de nenhuma forma</li>
            </ol>
        </div>
    )
}

if (k == 30000) {
    window.location.href = './sendMessage.html'
}

// Check if webcam access is supported.
function getUserMediaSupported() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

// If webcam supported, add event listener to button for when user
// wants to activate it to call enableCam function which we will 
// define in the next step.
if (!getUserMediaSupported()) {
    console.warn('getUserMedia() is not supported by your browser');
}

// Placeholder function for next step. Paste over this in the next step.
function enableCam() {
    // Only continue if the COCO-SSD has finished loading.
    if (!model) {
        return;
    }
    // getUsermedia parameters to force video but not audio.
    const constraints = {
        video: true
    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        video.srcObject = stream;
        video.addEventListener('loadeddata', predictWebcam);
    });
}

// Store the resulting model in the global scope of our app.
var model = true;

// Before we can use COCO-SSD class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment 
// to get everything needed to run.
// Note: cocoSsd is an external object loaded from our index.html
// script tag import so ignore any warning in Glitch.
cocoSsd.load().then(function (loadedModel) {
    model = loadedModel;
});

var children = [];
var Camera = false;

function predictWebcam() {
    // Now let's start classifying a frame in the stream.
    if (model.detect(video)) {
        model.detect(video).then(function (predictions) {
            // Remove any highlighting we did previous frame.
            for (let i = 0; i < children.length; i++) {
                liveView.removeChild(children[i]);
            }
            children.splice(0);

            // Now lets loop through predictions and draw them to the live view if
            // they have a high confidence score.
            for (let n = 0; n < predictions.length; n++) {
                // If we are over 66% sure we are sure we classified it right, draw it!
                if (predictions[n].score > 0.66) {
                    if (predictions[n].class != "person") {
                        root.render(
                            <React.StrictMode>
                                <Modal />
                            </React.StrictMode>);
                    }

                    const p = document.createElement('p');
                    p.innerText = predictions[n].class + ' - with '
                        + Math.round(parseFloat(predictions[n].score) * 100)
                        + '% confidence.';
                    p.style = 'margin-left: ' + predictions[n].bbox[0] + 'px; margin-top: '
                        + (predictions[n].bbox[1] - 10) + 'px; width: '
                        + (predictions[n].bbox[2] - 10) + 'px; top: 0; left: 0;';

                    const highlighter = document.createElement('div');
                    highlighter.setAttribute('class', 'highlighter');
                    highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
                        + predictions[n].bbox[1] + 'px; width: '
                        + predictions[n].bbox[2] + 'px; height: '
                        + predictions[n].bbox[3] + 'px;';

                    liveView.appendChild(highlighter);
                    liveView.appendChild(p);
                    children.push(highlighter);
                    children.push(p);
                }
            }
            // Call this function again to keep predicting when the browser is ready.
            requestAnimationFrame(predictWebcam);
        });
    }
    else {
        root.render(
            <React.StrictMode>
                <Modal />
            </React.StrictMode>);
    }
}

onload = () => {
    if (innerWidth >= 600) enableCam();
}

if (!sessionStorage.getItem("uid")) {
    if (innerWidth < 600) {
        confirm("S??? d???ng m??y t??nh, m??y t??nh b???ng ????? xem n???i dung n??y!\nUse a computer or tablet to view this content!")
        root.render(
            <React.StrictMode>
                <div style={{ padding: '12px', display: 'flex', flexWrap: 'wrap' }}>
                    N???i dung kh??ng hi???n th??? tr??n thi???t b??? n??y
                    <br />The content is not displayed on this device
                </div>
            </React.StrictMode>
        );
    }
    else {
        confirm('Please Log In')
        window.location.href = './pages/login.html'
        root.render('Loading content...')
    }
}
else if (innerWidth >= 600) {
    root.render(
        <React.StrictMode>
            <Modal />
        </React.StrictMode>);

    setInterval(() => {
        root.render(<React.StrictMode>
            <App />
        </React.StrictMode>)
    }, 9000);
}

document.body.addEventListener("mouseleave", function (event) {
    if (event.clientY <= 0 || event.clientX <= 0
        || (event.clientX >= window.innerWidth
            || event.clientY >= window.innerHeight)) {
        root.render(
            <React.StrictMode>
                <Modal />
            </React.StrictMode>);
    }
});

/** TO DISABLE SCREEN CAPTURE **/
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots disabled!');
    }
});

/*  TO DISABLE PRINTS WHIT CTRL+P **/
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'p') {
        alert('This section is not allowed to print or export to PDF');
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

document.body.oncontextmenu = () => false

document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        alert('not allowed');
        return false;

    } else if (e.keyCode == 123) { // Prevent F12
        alert('not allowed');
        return false;
    } else if (e.ctrlKey && e
        .shiftKey && e.keyCode == 73) {
        // Prevent Ctrl+Shift+I 
        alert('not allowed');
        return false;
    } else {
        return true;
    }
}; 