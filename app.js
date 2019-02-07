(function(){


	const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""

	};

	firebase.initializeApp(config);

	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	const btnSignUp = document.getElementById("btnSignUp");
	const btnLogOut = document.getElementById("btnLogOut");

	btnLogin.addEventListener('click', e =>{
		const emali = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		const promise = auth.signInWithEmailAndPassword(emali,pass);
		promise.catch(e => console.log(e.message));
		document.write("Login");
	});
	btnSignUp.addEventListener('click', e =>{
	const emali = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(emali,pass);
	promise.catch(e => console.log(e.message));
	document.write("SignUp");
	});
	btnLogOut.addEventListener('click', e =>{
		firebase.auth().signOut();
		document.write("SignOut");
	});

	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser) {
			console.log(firebaseUser);
			btnLogOut.classList.remove('hide');
		}else{
			console.log('not logged in');
			btnLogOut.classList.add('hide');
		}
	});
}());
