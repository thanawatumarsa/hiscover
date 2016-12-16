<template lang="html">
  <link href="https://fonts.googleapis.com/css?family=Catamaran" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Athiti|Oxygen" rel="stylesheet">
  <div class="top">
    <div id="header">
      <tool-bar :search = "search"></tool-bar>
    </div>
  </div>
  <div class="columns is-desktop">
    <div class="column is-2 is-offset-1">
      <menu :cate-search = "cateSearch"></menu>
    </div>
    <div class="column is-6 is-offset-0">
      <content :toggleshow = "toggleShow" :show = "show" :showplay = "showPlay" :list = "list" :playlist = "playLists" :select = "select" :video = "VideoId" :end = "end" :pl = "addPlayList" :showplaylist = "showPlaylist" :showpl = "showpl"></content>
    </div>
    <div class="column is-2 is-offset-0">
      <play-list :select = "select" :playlist = "playLists" :deleteplaylist = "deletePlayList"></play-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
import ToolBar from './components/ToolBar'
import Content from './components/Content'
import Menu from './components/Menu'
import PlayList from './components/PlayList'

export default {
  data () {
    return {
      checkLists: [],
      pushList: [],
      list: [],
      playLists: [],
      VideoId: '',
      defaultPL: 'cover',
      keysTemp: '',
      showPlay: true,
      showPlaylist: [],
      chkSelect: 0
    }
  },
  ready () {
    this.search(this.defaultPL)
    console.log(this.playLists)
  },
  components: {
    ToolBar,
    Content,
    Menu,
    PlayList
  },
  methods: {
    end () {
      let vm = this
      this.deletePlayList(0)
      this.select(vm.playLists[0])
    },
    search (keyword) {
      let vm = this
      var maxlist = vm.list.length
      vm.list.splice(0, maxlist)
      this.$http.get('/search?keyword=' + keyword + ' cover').then(function (res) {
        vm.checkLists = JSON.parse(res.body).items
        this.keysTemp = keyword
        this.show = true
        for (var i = 0; i < vm.checkLists.length; i++) {
          if (vm.checkLists[i].id.kind === 'youtube#video') {
            this.pushList = vm.checkLists[i]
            this.list.push(this.pushList)
          }
        }
      })
      var maxChkLists = vm.checkLists.length
      vm.checkLists.splice(0, maxChkLists)
      console.log(this.list)
    },
    cateSearch (keysearch) {
      let vm = this
      var maxlist = vm.list.length
      vm.list.splice(0, maxlist)
      this.$http.get('/search?keyword=' + this.keysTemp + keysearch).then(function (res) {
        vm.checkLists = JSON.parse(res.body).items
        this.show = true
        for (var i = 0; i < vm.checkLists.length; i++) {
          if (vm.checkLists[i].id.kind === 'youtube#video') {
            this.pushList = vm.checkLists[i]
            this.list.push(this.pushList)
          }
        }
      })
      var maxChkLists = vm.checkLists.length
      vm.checkLists.splice(0, maxChkLists)
    },
    select (Vid) {
      let vm = this
      let source = Vid.id.videoId
      this.VideoId = source
      for (var i = 0; i < vm.playLists.length; i++) {
        if (vm.playLists[i].id.videoId === source) {
          this.deletePlayList(i)
          vm.playLists.splice(0, 0, Vid)
          this.chkSelect = 1
        }
      }
      if (this.chkSelect !== 1) {
        vm.playLists.splice(0, 1, Vid)
      }
      this.showPlay = false
      this.chkSelect = 0
    },
    selectPlaylist (id) {
      let source = id
      this.VideoId = source
    },
    addPlayList (pl) {
      var check = 0
      let vm = this
      for (var i = 0; i < vm.playLists.length; i++) {
        if (vm.playLists[i].id.videoId === pl.id.videoId) {
          check++
        }
      }
      if (check === 0) {
        vm.playLists.push(pl)
      } else {
        // Do Nothing
      }
      if (vm.playLists.length === 1) {
        this.select(vm.playLists[0])
      }
    },
    deletePlayList (index) {
      let vm = this
      vm.playLists.splice(index, 1)
    },
    showpl (index) {
      this.showPlaylist[index].show = true
    }
  }
}

</script>

<style lang="css">

body {
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  font-family: 'Athiti', 'Oxygen';
  background-color: #F1F1F1;
}

.top {
  padding: 0;
  margin: 0px;
  width: 100%;
  height: 50px;
  color: white;
  background-color: #282828;
  font-family: 'Athiti', 'Oxygen';
}

#header {
  padding: 12px 10%;
  font-family: 'Athiti', 'Oxygen';
}

#main div {
   flex: 1;
}

#textmenu {
  padding: 0px 35px;
  font-size: 25px;
  margin-top: 20px;
}

.textContent {
  padding: 0px 20px;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media screen and (max-width: 1500px) {
  .textContent {
    font-size: 100%;
  }
}

@media screen and (max-width: 690px) {
  .textContent {
    font-size: 100%;
  }
}

@media screen and (max-width: 500px) {
  .textContent {
    font-size: 50%;
  }
}

@media screen and (max-width: 450px) {
  .textContent {
    font-size: 70%;
  }
}

@media screen and (max-width: 401px) {
  .textContent {
    font-size: 100%;
    margin-bottom: 20px;
  }
}


#boxmenu {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 3px;
}

#menu {
  width: 100%;
  margin-top: 10px;
}

.button {
  background-color: #F2F2F2;
  padding: 0px 30px;
  text-align: left;
  width: 100%;
  height: 50px;
  border: 0;
  font-size: 20px;
  transition: all 0.2s ease 0s;
  font-family: 'Athiti', 'Oxygen';
}

.button:hover {
    background-color: #404040;
}

@media screen and (max-width: 980px) {
  #boxmenu {
    height: 50%;
  }

  #textmenu {
    padding: 3px 35px;
    font-size: 15px;
  }

  #menu {
    width: 100%;
    margin-top: 0px;
  }

  .button {
    height: 30px;
    font-size: 15px;
  }
}

/*@media screen and (max-width: 980px) {
    #boxmenu {
        visibility: hidden;
    }
}*/

#video {
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
}

.playList {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  overflow-y:scroll;
  align-items: center;
  padding-right:0px;
  background-color: #F2F2F2;
  border-radius: 3px;
}

@media screen and (max-width: 980px) {
  .playList {
    height: 50vh;
  }
}


.content {
  background-color: #F2F2F2;
  margin-top: 10px;
  align-items: center;
  overflow: hidden;
  border-radius: 3px;
}

#playlists {
  margin-top: 10px;
  height: 83.5vh;
  width: 100%;
  overflow-y:scroll;
  align-items: center;
  padding-right:0px;
}

@media screen and (max-width: 980px) {
  #playlists {
    height: 30vh;
  }
}

input[type=text]{
  padding: 6px 12px;
  border-radius:0px;
  height: 10px;
  width: 200px;
  font-family: 'Athiti', 'Oxygen';
}

.searchInput {
  border-radius: 25px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container iframe {
	position:absolute;
  margin-left: -5%;
	left:5%;
	width:100%;
	height:100%;
}

.card {
  width: 99.5%;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #ffffff;
  overflow: hidden;
  transition: all 0.2s ease 0s;
  border: 1.2px solid #E6E6E6;
}

.cardClick {
  background-color: #ffffff;
  width: 92%;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
}

.cardContent {
  width: 99.5%;
  height: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #ffffff;
  transition: all 0.2s ease 0s;
  border: 1.2px solid #E6E6E6;
}

@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.cardPlaylist {
  width: 98%;
  margin-top: 5px;
  background-color: #ffffff;
  overflow: hidden;
  border: 1.2px solid #E6E6E6;
}

.fade-in {
  opacity:0;  /* make things invisible upon start */
	-webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
	-moz-animation:fadeIn ease-in 1;
	animation:fadeIn ease-in 1;

	-webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
	-moz-animation-fill-mode:forwards;
	animation-fill-mode:forwards;

	-webkit-animation-duration:0.3s;
	-moz-animation-duration:0.3s;
	animation-duration:0.3s;
}

.fade-in.one {
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.color1 {
  border: 2px solid #58D3F7;
}

.color2 {
  border: 1.2px solid #E6E6E6;
}

.play {
  width: 100%;
  text-align: center;
}

/*.card:hover {
  background-color: #999999;
  box-shadow: 15px 10px 25px 0 rgba(0,0,0,0.2);
}*/

.imgLink {
  float: left;
  padding-bottom: -6px;
  width: 30%;
  height: 100%;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
}

.imgPL {
  float: left;
  padding-bottom: -6px;
  width: 30%;
  height: 13.4vh auto;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
}

.nameLink {
  width: 50%;
  height: 100%;
  max-height: 30px;
  font-size: 100%;
  margin-top: 30px;
  margin-right: 5px;
  margin-left: 25px;
  margin-bottom: 15px;
  word-wrap:break-word;
  display: inline-block;
}

@media screen and (max-width: 1500px) {
  .nameLink {
    font-size: 100%;
    margin-top: 15px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 690px) {
  .nameLink {
    font-size: 100%;
    margin-top: 10px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 500px) {
  .nameLink {
    font-size: 50%;
    margin-top: -10px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 450px) {
  .nameLink {
    font-size: 70%;
    margin-top: 10px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 401px) {
  .nameLink {
    font-size: 60%;
    margin-top: 10px;
    margin-left: 5px;
  }
}

.namePL {
  width: 50%;
  height: 50px;
  font-size: 70%;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
  word-wrap:break-word;
  overflow: hidden;
  text-overflow: '...?';
  z-index: -1;
}

@media screen and (max-width: 1500px) {
  .namePL {
    font-size: 100%;
    margin-top: 10px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 500px) {
  .namePL {
    font-size: 50%;
    margin-top: -10px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 450px) {
  .namePL {
    font-size: 70%;
    margin-top: 20px;
    margin-left: 5px;
  }
}

@media screen and (max-width: 401px) {
  .namePL {
    font-size: 60%;
    margin-top: 20px;
    margin-left: 5px;
  }
}

.del {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 0;
  z-index: -1;
  text-align: center;
  float: right;
  position: relative;

  transition: all 0.2s ease 0s;
}

.del:hover {
  background-color: #ff4d4d;
}

.addPlaylist {
  width: 50px;
  height: 50px;
  margin-top: -110px;
  margin-right: 10px;
  float: right;
  position: relative;
}

@media screen and (max-width: 980px) {
  .addPlaylist {
    margin-top: -80px;
    margin-left: 10px;
  }
}

@media screen and (max-width: 500px) {
  .addPlaylist {
    margin-top: -60px;
    margin-left: 10px;
  }
}
.playButt {
  font-family: 'Athiti', 'Oxygen';
  font-size: 20px;
  width: 90%;
  height: 30px;
  border-radius: 3px;
  background-color: #0086b3;
  border: 0;
  transition: all 0.2s ease 0s;
  box-shadow: 2px 2px 5px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.playButt:hover {
    background-color: #00ace6;
}

.addButt {
  font-family: 'Athiti', 'Oxygen';
  font-size: 25px;
  display: inline-block;
  color: white;
  width: 100%;
  height: 100%;
  margin-top:5px;
  margin-right: 5px;
  border-radius: 5%;
  background-color: #58D3F7;
  float: right;
  border: 0;
  margin-top: 4%;
  margin-left: 10%;
  transition: all 0.2s ease 0s;
}

@media screen and (max-width: 768px) {
  .addButt {
    width: 30px;
    height: 30px;
    font-size: 15px;
    float: right;
  }
}

@media screen and (max-width: 350px) {
  .addButt {
    width: 20px;
    height: 20px;
    font-size: 10menupx;
    float: right;
  }
}

.addButt:hover {
    background-color: #01A9DB;
}

.addButt:active {
  background-color: #01A9DB;
  box-shadow: 0px 0px 0px;
}

.text {
  padding: 20px 35px;
  font-family: 'Athiti', 'Oxygen';
  font-size: 18px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #6E6E6E;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6E6E6E;
}
::-webkit-scrollbar-thumb:active {
  background: #F2F2F2;
}
::-webkit-scrollbar-track {
  background: #F2F2F2;
  border: 0px none #F2F2F2;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #F2F2F2;
}
::-webkit-scrollbar-track:active {
  background: #F2F2F2;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>
