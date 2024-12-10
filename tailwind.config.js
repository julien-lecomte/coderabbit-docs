/*
 * Copyright 2024 CodeRabbit AI Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false, // disable Tailwind's reset
	},
	content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
	darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
	theme: {
		fontFamily: {
			figtree: ["Figtree", "sans-serif"],
			satoshi: ["Satoshi", "Satoshi Placeholder", "sans-serif"],
		},
		extend: {
			colors: {
				customGray: "rgb(189, 189, 189)",
				customWhite: "rgb(255, 255, 255)",
			},
		},
	},
	plugins: [],
}
