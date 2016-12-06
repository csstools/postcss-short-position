// tooling
const postcss = require('postcss');

// side properties
const properties = ['top', 'right', 'bottom', 'left'];

// position value pattern
const positionMatch = /^(inherit|initial|unset|absolute|fixed|relative|static|sticky|var\(.+\))$/;

// plugin
module.exports = postcss.plugin('postcss-short-position', ({
	prefix = '',
	skip   = '*'
}) => {
	// dashed prefix
	const dashedPrefix = prefix ? '-' + prefix + '-' : '';

	// property pattern
	const propertyMatch = new RegExp(`^${ dashedPrefix }(position)$`);

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, (decl) => {
			// unprefixed property
			const property = decl.prop.match(propertyMatch)[1];

			// if a prefix is in use
			if (prefix) {
				// remove it from the property
				decl.prop = property;
			}

			// position value
			let position;

			// space-separated values (top, right, bottom, left) sans the position value
			const values = postcss.list.space(decl.value).filter((value) => {
				// whether the value is a position
				const isPosition = !position && positionMatch.test(value);

				// if the value is a position
				if (isPosition) {
					// update the position value
					position = value;
				}

				// return whether the value was not a position (a side)
				return !isPosition;
			});

			// conditionally add a top value
			if (values.length === 0) {
				values.push(skip);
			}

			// conditionally add a right value
			if (values.length === 1) {
				values.push(values[0]);
			}

			// conditionally add a bottom value
			if (values.length === 2) {
				values.push(values[0]);
			}

			// conditionally add a left value
			if (values.length === 3) {
				values.push(values[1]);
			}

			// for each side property
			properties.forEach((side, index) => {
				// if the value is not a skip token
				if (values[index] !== skip) {
					// create a new declaration for the side property
					decl.cloneBefore({
						prop:  side,
						value: values[index]
					});
				}
			});

			// if there is a position value
			if (position) {
				// update the position value
				decl.value = position;
			} else {
				// otherwise, remove the original position declaration
				decl.remove();
			}
		});
	};
});
