<template>
  <div class="foto">
    <h1>{{ msg }}</h1>
      <div v-if="!image">
    <input id="inputF" type="file" accept="video/*;capture=camcorder" @change="onFileChange">
  </div>
  <div v-else>
    <img id="imgLoad" :src="image" width="100px" height="100px"/>
      <input id="inputF" type="file" accept="video/*;capture=camcorder" @change="onFileChange">
   <button @click="removeImage">Remove image</button>
   
  </div>
     <div id="lastIMG"> 
    </div>
  </div>
</template>
<script>
	//var firebase = require('firebase');
	var $ = require('jquery')
	export default {
		name: 'foto',
		data() {
			return {
				msg: 'Escolher Arquivo',
				image: '',
				imageB: '',
				urr: ''
			}
		},
		methods: {
			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return;
				this.createImage(files[0]);
				var file = e.target.files[0];
				//var storageRef = firebase.storage().ref(file.name);
				console.log('<filename >', file);
				var metadata = {
					contentType: 'image/jpeg'
				};
				
				
				
		
				
			
			},
			createImage(file) {
				var image = new Image();
				var reader = new FileReader();
				var vm = this;
				reader.onload = (e) => {
					vm.image = e.target.result;
					$("#lastIMG").append('<img  src="' + vm.image + '" width="100px" height="auto"/>');
						var ind = new Date().toISOString(); 
				var post = {
           id: ind,
					image: vm.image,
					fileName: file.name,
							user: 5585558
        };
		
        writeData('posts', post);
				if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
    
        console.log('From cache', data);
        
     
    });
};
					$("#imgLoad").remove();
				};
				reader.readAsDataURL(file);
				console.log('readerfile > ',reader);
				// use the Blob or File API
				/*storageRef.put(reader).then(function(snapshot) {
					console.log('Uploaded a blob or file!');
				});*/
				//console.log(image.innerText + '<kkkkk>');
			},
			removeImage: function(e) {
				$("#lastIMG").remove();
			},
		}
	};
			readAllData('posts')
        .then(function(data) {
          for (var dt of data) {
          $("#lastIMG").append('<img  src="' + dt.image + '" width="100px" height="auto"/>');
          }

        })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2,
	p {
		font-weight: normal;
		color: beige;
	}
</style>