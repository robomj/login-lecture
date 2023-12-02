"use strict";

const id = document.querySelector("#id"),
	password = document.querySelector("#password"),
	loginButton = document.querySelector("#button");

loginButton.addEventListener("click", login);

function login() {
	if(!id.value) return alert("아이디 입력해");
  
  if(!password.value) return alert("비밀번호 입력해");
	
	const req = {
		id: id.value,
		password: password.value
	};

	fetch("/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(req),
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.success) {
				location.href = "/";
			} else {
				if(res.err) return alert(res.err);
				alert(res.message);
			}
		})
		.catch((err) => {
			console.error("로그인 중 에러 발생");
		});
}