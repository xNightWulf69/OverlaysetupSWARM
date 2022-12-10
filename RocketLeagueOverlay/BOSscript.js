async function bw1() {
    var bob1 = localStorage.getItem("bwin1");
    if (bob1 === 'true') {
        localStorage.setItem('bwin1', false);
        $('.buttonbw1').css('background', 'white')
    } else {
        localStorage.setItem('bwin1', true);
        $('.buttonbw1').css('background', 'rgb(0, 149, 255)')}}
async function bw2() {
    var bob2 = localStorage.getItem("bwin2");
    if (bob2 === 'true') {
        localStorage.setItem('bwin2', false);
        $('.buttonbw2').css('background', 'white')
    } else {
        localStorage.setItem('bwin2', true);
        $('.buttonbw2').css('background', 'rgb(0, 149, 255)')}}
async function bw3() {
    var bob3 = localStorage.getItem("bwin3");
    if (bob3 === 'true') {
        localStorage.setItem('bwin3', false);
        $('.buttonbw3').css('background', 'white')
    } else {
        localStorage.setItem('bwin3', true);
        $('.buttonbw3').css('background', 'rgb(0, 149, 255)')}}
async function bw4() {
    var bob4 = localStorage.getItem("bwin4");
    if (bob4 === 'true') {
        localStorage.setItem('bwin4', false);
        $('.buttonbw4').css('background', 'white')
    } else {
        localStorage.setItem('bwin4', true);
        $('.buttonbw4').css('background', 'rgb(0, 149, 255)')}}
async function ow1() {
    var oob1 = localStorage.getItem("owin1");
    if (oob1 === 'true') {
        localStorage.setItem('owin1', false);
        $('.buttonow1').css('background', 'white')
    } else {
        localStorage.setItem('owin1', true);
        $('.buttonow1').css('background', 'rgb(255, 187, 0)')}}
async function ow2() {
    var oob2 = localStorage.getItem("owin2");
    if (oob2 === 'true') {
        localStorage.setItem('owin2', false);
        $('.buttonow2').css('background', 'white')
    } else {
        localStorage.setItem('owin2', true);
        $('.buttonow2').css('background', 'rgb(255, 187, 0)')}}
async function ow3() {
    var oob3 = localStorage.getItem("owin3");
    if (oob3 === 'true') {
        localStorage.setItem('owin3', false);
        $('.buttonow3').css('background', 'white')
    } else {
        localStorage.setItem('owin3', true);
        $('.buttonow3').css('background', 'rgb(255, 187, 0)')}}
async function ow4() {
    var oob4 = localStorage.getItem("owin4");
    if (oob4 === 'true') {
        localStorage.setItem('owin4', false);
        $('.buttonow4').css('background', 'white')
    } else {
        localStorage.setItem('owin4', true);
        $('.buttonow4').css('background', 'rgb(255, 187, 0)')}}
async function bestof3() {
    var bestof3 = localStorage.getItem("bestof3");
    if (bestof3 === 'true') {
        localStorage.removeItem('bestof3');
        localStorage.removeItem('bestof5');
        localStorage.removeItem('bestof7');
        $('.buttonbestof3').css('background', 'white')
    } else {
        localStorage.setItem('bestof3', true);
        localStorage.setItem('bestof5', false);
        localStorage.setItem('bestof7', false);
        $('.buttonbestof3').css('background', 'rgb(0, 255, 145)')
        const classes = ['.buttonnobestof', '.buttonbestof5', '.buttonbestof7']
        for (let i of classes) {
            $(i).css('background', 'white')}}}
async function bestof5() {
    var bestof5 = localStorage.getItem("bestof5");
    if (bestof5 === 'true') {
        localStorage.removeItem('bestof3');
        localStorage.removeItem('bestof5');
        localStorage.removeItem('bestof7');
        $('.buttonbestof5').css('background', 'white')
    } else {
        localStorage.setItem('bestof5', true);
        localStorage.setItem('bestof3', false);
        localStorage.setItem('bestof7', false);
        $('.buttonbestof5').css('background', 'rgb(0, 255, 145)')
        const classes = ['.buttonnobestof', '.buttonbestof3', '.buttonbestof7']
        for (let i of classes) {
            $(i).css('background', 'white')}}}
async function bestof7() {
    var bestof7 = localStorage.getItem("bestof7");
    if (bestof7 === 'true') {
        localStorage.removeItem('bestof3');
        localStorage.removeItem('bestof5');
        localStorage.removeItem('bestof7');
        $('.buttonbestof7').css('background', 'white')
    } else {
        localStorage.setItem('bestof7', true);
        localStorage.setItem('bestof3', false);
        localStorage.setItem('bestof5', false);
        $('.buttonbestof7').css('background', 'rgb(0, 255, 145)')
        const classes = ['.buttonnobestof', '.buttonbestof3', '.buttonbestof5']
        for (let i of classes) {
            $(i).css('background', 'white')}}}
async function nobestof() {
    localStorage.removeItem('bestof3');
    localStorage.removeItem('bestof5');
    localStorage.removeItem('bestof7');
    const classes = ['.buttonnobestof', '.buttonbestof3', '.buttonbestof5', '.buttonbestof7']
    for (let i of classes) {
        $(i).css('background', 'white')}}

async function reset() {
    localStorage.clear();
    document.querySelector('.bluenametest').value = ''
    document.querySelector('.orangenametest').value = ''
    $(".blueteamnamesubmit").css('background', 'red')
    $(".orangeteamnamesubmit").css('background', 'red')
   const classes = ['.buttonbw1', '.buttonbw2', '.buttonbw3', '.buttonbw4', '.buttonow1', '.buttonow2', '.buttonow3', '.buttonow4', '.buttonow4','.buttonow4', '.buttonnobestof', '.buttonbestof3', '.buttonbestof5', '.buttonbestof7']
    for (let i of classes) {
        $(i).css('background', 'white')}
        $(".blueteamnamesubmit").css('background', 'red')
        $(".orangeteamnamesubmit").css('background', 'red')
        $(".bluecoloursubmit").css('background', 'red')
        $(".orangecoloursubmit").css('background', 'red')
        $(".blueprimary").css('background', 'white')
        $(".orangeprimary").css('background', 'white')
        $(".bluesecondary").css('background', 'white')
        $(".orangesecondary").css('background', 'white')
        document.querySelector('.blueprimary').value = ''
        document.querySelector('.bluesecondary').value = ''
        document.querySelector('.orangeprimary').value = ''
        document.querySelector('.orangesecondary').value = ''
    }


async function blueteamnamesubmit() {
    const val = document.querySelector('.bluenametest').value;
    localStorage.setItem('blueteamname', val);
    if (localStorage.getItem("blueteamname") == "") {
        $(".blueteamnamesubmit").css('background', 'red')
    } else { 
        $(".blueteamnamesubmit").css('background', 'green')
     }
}
async function orangeteamnamesubmit() {
    const val = document.querySelector('.orangenametest').value;
    localStorage.setItem('orangeteamname', val);
    if (localStorage.getItem("orangeteamname") == "") {
        $(".orangeteamnamesubmit").css('background', 'red')
    } else { 
        $(".orangeteamnamesubmit").css('background', 'green')
     }
}
async function bluecolorsubmit() {
    const primary = document.querySelector('.blueprimary').value;
    const secondary = document.querySelector('.bluesecondary').value;
    localStorage.setItem('blueprimary', primary);
    localStorage.setItem('bluesecondary', secondary);
    if (localStorage.getItem("blueprimary" || "bluesecondary")) {
           $(".bluecoloursubmit").css('background', 'green')
     } else {
        $(".bluecoloursubmit").css('background', 'red')
     }
}
async function bluecolorsubmitclear() {
    localStorage.removeItem('blueprimary');
    localStorage.removeItem('bluesecondary');
    document.querySelector('.blueprimary').value = ''
    document.querySelector('.bluesecondary').value = ''
    $(".blueprimary").css('background', 'white')
    $(".bluesecondary").css('background', 'white')
    $(".bluecoloursubmit").css('background', 'red')
}
async function orangecolorsubmit() {
    const primary = document.querySelector('.orangeprimary').value;
    const secondary = document.querySelector('.orangesecondary').value;
    localStorage.setItem('orangeprimary', primary);
    localStorage.setItem('orangesecondary', secondary);
    if (localStorage.getItem("orangeprimary" || "orangesecondary")) {
        $(".orangecoloursubmit").css('background', 'green')
  } else {
     $(".orangecoloursubmit").css('background', 'red')
  }
}
async function orangecolorsubmitclear() {
   localStorage.removeItem('orangeprimary');
   localStorage.removeItem('orangesecondary');
   document.querySelector('.orangeprimary').value = ''
   document.querySelector('.orangesecondary').value = ''
   $(".orangeprimary").css('background', 'white')
   $(".orangesecondary").css('background', 'white')
   $(".orangecoloursubmit").css('background', 'red')
}
window.onbeforeunload = function (e) {
    localStorage.clear();
};
async function uselogo() {
    var uselogo = localStorage.getItem("uselogo");
    if (uselogo === 'true') {
        localStorage.setItem('uselogo', false);
        $('.uselogo').css('background', 'red')
    } else {
        localStorage.setItem('uselogo', true);
        $('.uselogo').css('background', 'green')
    }
 }