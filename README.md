# dev-portfolio
A Wordpress plugin for a developer portfolio. Use this plugin to add `div` transition animations, a navigation menu, and a contact form to a Wordpress content page.

## Setup
First, install this plugin to your `plugins` folder. From the root directory...

```
cd wp-content\plugins\
git clone https://github.com/ajgmez1/dev-portfolio.git
```

Next, define a Wordpress page with the slug `dev-portfolio`. 

Finally, add content to your page. This plugin will group each section by `<div>` tags. 
The title of the section is determined by the `div`'s class. 
Like-class `div`'s are grouped together in the navigation menu if they are in order.
Each section is broken into two sub sections by `ul` tag. Use `h4` and `h5` tags for titles.

```
<div class='section-name'>
  <h4> content title </h4>
  <ul>
    //some image or content here 
    <img src="section-info.com">
    <h5> a sub section title </h5>
  </ul>
  <ul>
    <li> some bullet point on sub section 2 </li>
    <li> another bullet point </li>
  </ul>
</div>
```

## Notes
This works with the TwentyTwenty Wordpress theme. Here is a [live example](http://ajgmez.com/dev-portfolio/).
