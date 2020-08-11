module.exports = {
	success,
	fail,
	repair,
	get
}

function success(item) {
	if (item.enhancement < 20) {
		item.enhancement += 1
	}

	return item
}

function fail(item) {
	if (item.enhancement < 15) {
		item.durability -= 5
	} else if (item.enhancement >= 15) {
		if (item.enhancement > 16) {
			item.enhancement -= 1
		}
		item.durability += 10
	}
	return item
}

function repair(item) {
	if (item.durability <= 100) {
		const diff = 100 - item.durability
		item.durability += diff
	}
	return item
}

function get(item) {
	return { ...item }
}
