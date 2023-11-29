"use strict";

const id = document.querySelector("#id"),
	password = document.querySelector("#password"),
	loginButton = document.querySelector("#button");

loginButton.addEventListener("click", login);

function login() {
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
				alert(res.message);
			}
		})
		.catch((err) => {
			console.error("로그인 중 에러 발생");
		});
}