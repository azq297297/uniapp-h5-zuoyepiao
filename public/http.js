const baseUrl = 'http://47.107.62.166:8084'; // dev
const httpAjax = (url, data, method, dataType) => {
	uni.showLoading({
		title: '加载中...',
		mask: true
	});


	//获取token
	let header = {}
	if (dataType) {
		header['content-type'] = 'application/x-www-form-urlencoded'
	} else {
		header['content-type'] = 'application/json'
	}
	if (uni.getStorageSync('token')) {
		header['X-Access-Token'] = uni.getStorageSync('token');

	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${baseUrl}${url}`,
			method,
			data,
			header,
			success: (res) => {
				console.log(res)
				switch (res.data.code) {
					case 0:
						resolve(res.data);
						break;
					case -1:
						// token失效
						break;
					default:
						console.log(res)
						// resolve(res.data);
						break;
				}
			},
			fail: (error) => {
				console.log(error)
				reject(error);
			},
			complete: () => {
				uni.hideLoading();
			}
		});
	});
};
const imgerver = (url) => {
	if (url) {
		return `${baseUrl}/so/sys/common/view/${url}`
	}


}
const date = () => {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	return `${year}-${add(month)}-${add(day)} ${add(hour)}:${add(minute)}:${add(second)}`
}

function add(n) {
	if (n <= 9) {
		return `0${n}`
	}
	return n
}
export {
	httpAjax,
	imgerver,
	date

};
