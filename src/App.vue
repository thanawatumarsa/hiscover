<template lang="html">
  <link href="https://fonts.googleapis.com/css?family=Catamaran" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Athiti|Oxygen" rel="stylesheet">
  <div class="top">
    <div id="header">
      <tool-bar :search = "search" :cate-search = "cateSearch"></tool-bar>
    </div>
  </div>
  <div class="columns is-desktop">
    <div class="column is-5 is-offset-1">
      sdfsdf
      <content :toggleshow = "toggleShow" :show = "show" :showplay = "showPlay" :list = "list" :select = "select" :video = "VideoId" :end = "end" :pl = "addPlayList" :showplaylist = "showPlaylist" :showpl = "showpl" :end = "end"></content>
    </div>
    <div class="column is-5 is-offset-0">
      <play-list :toggleshowplay = "toggleShowPlay" :select = "select" :toggleshow = "toggleShow" :playlist = "playLists" :deleteplaylist = "deletePlayList"></play-list>
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
      list: [],
      playLists: [],
      VideoId: '',
      defaultPL: 'cover',
      keyTemp: '',
      showPlay: true,
      showPlaylist: []
    }
  },
  ready () {
    this.search(this.defaultPL)
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
      this.$http.get('/search?keyword=' + keyword + ' cover').then(function (res) {
        // console.log(JSON.parse(res.body))
        vm.list = JSON.parse(res.body).items
        this.keyTemp = keyword
        this.show = true
        for (var i = 0; i < vm.list.length; i++) {
          var playlistCheck = {
            id: i,
            show: false
          }
          this.showPlaylist.push(playlistCheck)
        }
      })
    },
    cateSearch (keysearch) {
      let vm = this
      this.$http.get('/search?keyword=' + this.keyTemp + keysearch).then(function (res) {
        vm.list = JSON.parse(res.body).items
        this.show = true
      })
    },
    select (Vid) {
      let vm = this
      let source = Vid.id.videoId
      this.VideoId = source
      for (var i = 0; i < vm.playLists.length; i++) {
        if (vm.playLists[i].id.videoId === source) {
          this.deletePlayList(i)
        }
      }
      vm.playLists.splice(0, 0, Vid)
      this.showPlay = false
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
  padding: 20px 35px;
  font-size: 25px;
}

#boxmenu {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding-bottom: 20px;
  border-radius: 3px;
}

/*@media screen and (max-width: 980px) {
    #boxmenu {
        visibility: hidden;
    }
}*/

#menu {
  width: 100%;
  margin-top: 10px;
}

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

.button {
  background-color: #F2F2F2;
  padding: 0px 30px;
  margin-bottom: 2px;
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

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  margin-bottom: 43px;
}

.video-container iframe {
	position:absolute;
  margin-left: -5%;
	top:0;
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
  width: 40%;
  height: 13.4vh auto;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
}

.nameLink {
  width: 60%;
  max-height: 30px;
  font-size: 100%;
  margin-top: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: '...?';
}

.namePL {
  width: 50%;
  height: 50px;
  font-size: 90%;
  margin-top: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: '...?';
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
  width: 60%;
  height: 50px;

  float: right;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 50px;
  background-color: #58D3F7;
  float: right;
  border: 0;
  margin-top: 4%;
  margin-left: 10%;
  transition: all 0.2s ease 0s;
  box-shadow: 2px 2px 5px;
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

/* Dropdown Button */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

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
