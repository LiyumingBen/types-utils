const ua = navigator.userAgent.toLowerCase();
/**
 * 邮箱📮
 * @param { String } s
 * @returns {  }
 */
export const isEmail = s => {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
		s
	);
};

/**
 * 手机号📱
 * @param { String } s
 * @returns {  }
 */
export const isMobile = s => {
	return /^1[0-9]{10}$/.test(s);
};

/**
 * 电话号 ☎️
 * @param { String } s
 * @returns {  }
 */
export const isPhone = s => {
	return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

/**
 * 是否url地址
 * @param { String } s
 * @returns {  }
 */
export const isURL = s => {
	return /^http[s]?\/\/.*/.test(s);
};

/**
 * 是否字符串
 * @param { String } o
 * @returns {  }
 */
export const isString = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "String";
};

/**
 * 是否数字
 * @param { String } o
 * @returns {  }
 */
export const isNumber = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Number";
};

/**
 * 是否
 * @param { String } o
 * @returns {  }
 */
export const is = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "";
};

/**
 * 是否函数
 * @param { String } o
 * @returns {  }
 */
export const isFunction = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};

/**
 * 是否Null
 * @param { String } o
 * @returns {  }
 */
export const isNull = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Null";
};

/**
 * 是否undefined
 * @param { String } o
 * @returns {  }
 */
export const isUndefined = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
};

/**
 * 是否数组
 * @param { String } o
 * @returns {  }
 */
export const isArray = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Array";
};

/**
 * 是否时间
 * @param { String } o
 * @returns {  }
 */
export const isDate = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Date";
};

/**
 * 是否正则
 * @param { String } o
 * @returns {  }
 */
export const isRegExp = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "RegExp";
};

/**
 * 是否错误对象
 * @param { String } o
 * @returns {  }
 */
export const isError = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Error";
};

/**
 * 是否Promise对象
 * @param { String } o
 * @returns {  }
 */
export const isPromise = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
};

/**
 * 是否Set对象
 * @param { String } o
 * @returns {  }
 */
export const isSet = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Set";
};

/**
 * 是否Symbol对象
 * @param { String } o
 * @returns {  }
 */
export const isSymbol = o => {
	return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
};

/**
 * 是否微信
 * @param { String } o
 * @returns {  }
 */
export const isWeiXin = () => {
	const match = ua.match(/MicroMessenger/i);
	if (match === null) {
		return false;
	}
	if (match.includes("micromessenger")) {
		return true;
	}
	return false;
};

/**
 * 数组扁平化
 * @param { Array } arr
 * @returns { Array }
 */

export const flatten = arr => {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};

/**
 * 深拷贝
 * @param { Object } obj
 * @returns { Object }
 */

export const deepClone = (obj, hash) => {
	// 日期对象直接返回一个新的日期对象
	if (obj instanceof Date) {
		return new Date(obj);
	} //正则对象直接返回一个新的正则对象
	if (obj instanceof RegExp) {
		return new RegExp(obj);
	}
	//如果循环引用,就用 weakMap 来解决
	if (hash.has(obj)) {
		return hash.get(obj);
	} // 获取对象所有自身属性的描述
	let allDesc = Object.getOwnPropertyDescriptors(obj); // 遍历传入参数所有键的特性
	let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
	hash.set(obj, cloneObj);
	for (let key of Reflect.ownKeys(obj)) {
		if (typeof obj[key] === "object" && obj[key] !== null) {
			cloneObj[key] = deepClone(obj[key], hash);
		} else {
			cloneObj[key] = obj[key];
		}
	}
	return cloneObj;
};

/**
 * 设备判断：android、ios、web
 * @param { Object } obj
 * @returns { String }
 */
export const isDevice = function () {
	// 判断是android还是ios还是web
	if (ua.match(/iPhone\sOS/i) === "iphone os" || ua.match(/iPad/i) === "ipad") {
		// ios
		return "iOS";
	}
	if (ua.match(/Android/i) === "android") {
		return "Android";
	}
	return "Web";
};

/**
 * 防抖函数
 * @param { Function, Number}
 * @returns { Void }
 */
export const debounce = (fn, wait) => {
	let timer = null;
	return function () {
		let context = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, wait);
	};
};

/**
 * 节流函数
 * @param { Function, Number}
 * @returns { Void }
 */
export const throttle = (fn, delay) => {
	let curTime = Date.now();
	return function () {
		let context = this,
			args = arguments,
			nowTime = Date.now();
		if (nowTime - curTime >= delay) {
			curTime = Date.now();
			return fn.apply(context, args);
		}
	};
};

/**
 * 判断是Windows还是Mac系统
 * @param {}
 * @returns { String }
 */
export const osType = () => {
	const agent = navigator.userAgent.toLowerCase();
	const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
	const isWindows =
		agent.indexOf("win64") >= 0 ||
		agent.indexOf("wow64") >= 0 ||
		agent.indexOf("win32") >= 0 ||
		agent.indexOf("wow32") >= 0;
	if (isWindows) {
		return "windows";
	}
	if (isMac) {
		return "mac";
	}
};

/**
 * 判断是Windows还是Mac系统
 * @param { String }
 * @returns { Boolean }
 */
export const isEmojiCharacter = value => {
	value = String(value);
	for (let i = 0; i < value.length; i++) {
		const hs = value.charCodeAt(i);
		if (0xd800 <= hs && hs <= 0xdbff) {
			if (value.length > 1) {
				const ls = value.charCodeAt(i + 1);
				const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
				if (0x1d000 <= uc && uc <= 0x1f77f) {
					return true;
				}
			}
		} else if (value.length > 1) {
			const ls = value.charCodeAt(i + 1);
			if (ls == 0x20e3) {
				return true;
			}
		} else {
			if (0x2100 <= hs && hs <= 0x27ff) {
				return true;
			} else if (0x2b05 <= hs && hs <= 0x2b07) {
				return true;
			} else if (0x2934 <= hs && hs <= 0x2935) {
				return true;
			} else if (0x3297 <= hs && hs <= 0x3299) {
				return true;
			} else if (
				hs == 0xa9 ||
				hs == 0xae ||
				hs == 0x303d ||
				hs == 0x3030 ||
				hs == 0x2b55 ||
				hs == 0x2b1c ||
				hs == 0x2b1b ||
				hs == 0x2b50
			) {
				return true;
			}
		}
	}
	return false;
};

/**
 * 判断是Windows还是Mac系统
 * @param { Number }
 * @returns { String }
 */
export const numberToChinese = function (num) {
	// 将阿拉伯数字翻译成中文的大写数字
	let AA = new Array(
		"零",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六",
		"七",
		"八",
		"九",
		"十"
	);
	let BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
	let a = ("" + num).replace(/(^0*)/g, "").split(".");
	let k = 0;
	let re = "";
	for (let i = a[0].length - 1; i >= 0; i--) {
		switch (k) {
			case 0:
				re = BB[7] + re;
				break;
			case 4:
				if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) {
					re = BB[4] + re;
				}
				break;
			case 8:
				re = BB[5] + re;
				BB[7] = BB[5];
				k = 0;
				break;
		}
		if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0) {
			re = AA[0] + re;
		}
		if (a[0].charAt(i) !== 0) {
			re = AA[a[0].charAt(i)] + BB[k % 4] + re;
		}
		k++;
	}
	if (a.length > 1) {
		// 加上小数部分(如果有小数部分)
		re += BB[6];
		for (let i = 0; i < a[1].length; i++) {
			re += AA[a[1].charAt(i)];
		}
	}
	if (re === "一十") {
		re = "十";
	}
	if (re.match(/^一/) && re.length === 3) {
		re = re.replace("一", "");
	}
	return re;
};

/**
 * 生成随机字符串
 * @param { Number } 几位
 * @returns { String }
 */
export const randomString = len => {
	let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
	let strLen = chars.length;
	let randomStr = "";
	for (let i = 0; i < len; i++) {
		randomStr += chars.charAt(Math.floor(Math.random() * strLen));
	}
	return randomStr;
};

/**
 * 字符串首字母大写
 * @param { String }
 * @returns { String }
 */
export const fistLetterUpper = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 手机号中间四位变成*
 * @param { String }
 * @returns { String }
 */
export const telFormat = tel => {
	tel = String(tel);
	return tel.substr(0, 3) + "****" + tel.substr(7);
};

/**
 * 数字转化为大写金额
 * @param { String }
 * @returns { String }
 */
export const digitUppercase = n => {
	const fraction = ["角", "分"];
	const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
	const unit = [
		["元", "万", "亿"],
		["", "拾", "佰", "仟"]
	];
	n = Math.abs(n);
	let s = "";
	for (let i = 0; i < fraction.length; i++) {
		s += (
			digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
		).replace(/零./, "");
	}
	s = s || "整";
	n = Math.floor(n);
	for (let i = 0; i < unit[0].length && n > 0; i++) {
		let p = "";
		for (let j = 0; j < unit[1].length && n > 0; j++) {
			p = digit[n % 10] + unit[1][j] + p;
			n = Math.floor(n / 10);
		}
		s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
	}
	return s
		.replace(/(零.)*零元/, "元")
		.replace(/(零.)+/g, "零")
		.replace(/^整$/, "零元整");
};