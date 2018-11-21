
UI structure

1. General catalog and files structure
build - dynamic folder, appears as a result of the build process (css and js resources may be stored here);
scss - folder contains .scss and .css sources;
images - folder contains the follownig sources: images, icons, sprites and svgs;
fonts - folder contains fonts;
js - folder contains JavaScript sources
index.html - Home page
about.html - About page
faq.html - FAQ page

1. Styles (scss folder) 
 - style.scss - general style file storing all includings;
 - core - folder contains core and general style sources;
	_reset.scss - normalize and reset styles;
 	_fonts.scss - fonts includings and declaration;
	_variables.scss - variables declaration: fonts, sizes, widths, heights, colors, viewport breakpoints and so on;
	_mixins.scss - mixins and extends declarations;
    _base.scss - default styles for the HTML elements such as: html, body, a, p, table and other. Has not to contain selectors with IDs and classes;
	_layout.scss - styles related to layout only (containers, rows, columns, blocks);
	_theme.scss - styled elements (forms, buttons, inputs, links, text, headings and other);
 - components - folder contains styles for a particular component (e.g. header, footer, training list, hero banner) and may also have styles for the whole pages (e.g. About, FAQ)
    _header.scss - styles related to header element. (All pages)
	_hero-banner.scss - hero banner (Home page, About page, FAQ page)