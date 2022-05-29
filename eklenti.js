module.exports = {
	randomResim: arr => {
		return arr[Math.round(Math.random() * (arr.length - 1))];
	},
	kullaniciProfil: user => {
	const lastName = user.last_name ? ` <b>${user.last_name}</b>` : '';
	const username = user.username ? ` \n\n<b>👤Kullanıcı Adı: @${user.username}</b>` : '';
	const userBio = user.bio ? ` \n\n<b>📖Bio: ${user.bio}</b>` : '';
	return `<b>Ad: <a href="tg://user?id=${user.id}">${user.first_name}${lastName}</a></b>${username}${userBio}\n\n🆔: <code>${user.id}</code>`;
    },
    ArtiEksi: n => n > 0 ? `+${n}` : n, // Artı Eksi Puanlama
	Degisken: str => str.replace(/\t+/gm, ""),
	HusnuEhedov: (n, singular, plural, accusative) => {
		n = Math.abs(n)
		let n10 = n % 10;
		let n100 = n % 100;
		if (n10 == 1 && n100 != 11) {
			return singular;
		}
		if (
			(2 <= n10 && n10 <= 4) &&
			!(12 <= n100 && n100 <= 14)
		) {
			return plural;
		}
		return accusative;
	}
}
 
