# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Tips About Using Github and VSCode

If you change the README or notes files in Github, use the little pencil icon, make your edits, and commit changes with a title.

In **the terminal**, run `git fetch`, `git status`, git should say that there is a change that has not been updated. Then use `git pull` to pull those changes from github onto your VS code

To send changes from VSCode back to github, first in the terminal run `git add .` this adds all the changes that you just made, aka staging the commit. Then commit those changes using `git commit -m "insert title"` Once you've committed, push those changes to github using `git push`

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

45% of the industry uses AWS as a cloud computing service, providing secure and reliable services from development, to storage, to upscaling or downscaling a website. **EC2** is a service that allows you to essentially rent space on a server to host your website. This allows you to host and manage a website without having to use your own hardware, and it is a safe and cheap option. I created my first EC2 **instance**. I didn't understand a lot of the specific settings that they asked us to use, but I copied the CS260 template to be the beginnings of my website. I used a **t3.nano** server size because it is the cheapest option and my website shouldn't have a large amount of traffic on it while I am developing it. Plus, my website won't need a ton of processing power so it will do just fine with a t3.nano instead of a t3.micro or t2.micro server size.

This is super secure, and I had to create a **key pair**, which is a file of code that serves as an encrypted password to access my instance. I also had to set up a two-factor authentication with Duo Mobile in order to log in to my account. I noticed that you can have a ICS account for your website. I as the owner login as the root, but it makes sense that I could give access to employees or others to work on and manage my AWS instances, but they would not have ownership. I thought that was interesting.

The default for EC2 is that you are given an IP address (internet ID) for your website. But if I shut the website down and then rebooted it, EC2 would give me a different IP address, which would be annoying because then I'd have to reassign it to my domain name, change lots of stuff, etc. To fix this issue, I created an **elastic IP address**. This means that I essentially own an IP address, and I can assign any of my instances to that IP address. This is nice because even if I reset the website I can keep the same IP address every time.

I used **Route 43**, another AWS service, to select a domain name for my website. I bought the name <http://virtualroc.link> for $5. The .link was cheaper than a .com or .org, but maybe if this website gets pretty functional I might but the .com domain name and try to upscale a bit. 

My IP address is: 34.206.104.67



## Caddy


**Caddy** is a webservice that manages encryption of data when any computer is in communciation with our website. It uses **Let's Encrypt** to create a free TLS (Transport Layer Security) certificate. This is basically how secure connections are made on the internat. 

Using *http*, data flows from computer to computer without being encrypted, which makes it really easy to steal information. Let's Encrypt creates a TLS certificate, which contains a public and private key. The server and client each exchange their public keys, and then a encryption algorithm is performed to create a private key that is only known by those 2 devices. The certificate certifies that both parties are legit. Once this "handshake" has taken place, the client and server are free to communcate securely. That's why in most browsers, the *https* domains have a little lock by them that say secure.

![Caddy Image](images/letsencryptCertIssue.jpg)


I had to manually enter into the web server using my key pair and ubuntu. I edited the Caddy file to route through my domain name instead of :80, which represented http. Caddy automatically registered my domain for a TLS certificate via Let's Encrypt and now my website is SECURE!

<https://virtualroc.link>
^Did you notice the s? :)


## HTML

HTML is essentially the base level for organizing text on a webpage. It is a markdown language, and formats text using **tags**. Here is an example of the first bit of HTML I wrote using [codepen.io](https://codepen.io)

```
<body>
  <main>
    <h3>Welcome to my website</h3>
    <p class="intro"> This website consists of...</p>
    <ul>
      <li>text</li>
      <li>bullet points</li>
      <li>cool stuff</li>
    </ul>
    <p class="outro"> I hope you enjoy our content! Learn more <a href="https://virtualroc.link">here</a>!</p>
  </main>
</body>
```

I learned how to examine the html for simon by cloning the code from the cs260 git repository. I can view it in a live server by using that extension in VS code, then I can use the inspect feature to go through the html elements and they are highlighted on the webpage so I can see what the code turns into. Pretty useful. I looked at a lot of elements, and noticed the importance of structural pieces sus as `<div>`, `<header>`, `<body>`, etc.  I also learned that you can use `<input type='text'>` to include a text box input, which will be super useful for when I want to input chat messages into virtual roc.

Most html elements have a `name` attribute and an `id` attribute. I was curious about this. **ID** is used for CSS to identify and highlight specific html elements and select them for styling. **Name** attributes are used for items where information must be sent to the backend. In input items, when the form is submitted, the name is the first part of a key value pair sent out. For example, a text box with name "fullname" and text "Jonah Shirts" would be sent like this fullname=Jonah Shirts


## CSS

The best way to include CSS styling in your html file is to include it with a link. It MUST be in the *header*. Here's an example:

```<link rel="stylesheet" href="styles.css" />```

styles.css

```
p {
  color: green;
}
```

![BoxImage](https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg)


This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
