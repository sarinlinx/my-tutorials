/*____________________ Auto TOC ____________________________________ */
const autoToc = document.querySelector('#auto-toc')

if (autoToc) {
    /*__________________ ADD TOC Container_____________________________*/
    const sTocContainer = document.querySelector('#auto-toc')
    const cTocContainer = `<span class="auto-toc-menu"></span>`
    sTocContainer.insertAdjacentHTML('afterbegin', cTocContainer)

    /*__________________ Add Header and Link Containers________________*/
    const sTocContentContainer = document.querySelector('.auto-toc-menu')
    const cTocTitleContainer = `<div class="auto-toc--title-container"></div>`
    const cTocLinkContainer = `<div class="auto-toc--link-container"></div>`
    sTocContentContainer.insertAdjacentHTML('afterbegin', cTocTitleContainer)
    sTocContentContainer.insertAdjacentHTML('beforeend', cTocLinkContainer)

    const sTocLinkContainer = document.querySelector('.auto-toc--link-container')

    /*__________________ Header title _________________________________*/
    const sTocTitleContainer = document.querySelector(
        '.auto-toc--title-container'
    )
    const cTocDefaultTitleEn = `<span class="auto-toc--title">Table of Contents</span>`
    const cTocDefaultTitleEs = `<span class="auto-toc--title">Tabla de Contenidos</span>`

    const tocBrowserLocale = window.location.href;
    //remove slashes 
    const tocBrowserLocaleText = tocBrowserLocale.replace(/\//g, '');

    // if (tocBrowserLocaleText.indexOf("hcen-us") >= 0) {
    sTocTitleContainer.insertAdjacentHTML('afterbegin', cTocDefaultTitleEn);
    // } else {
    //     sTocTitleContainer.insertAdjacentHTML('afterbegin', cTocDefaultTitleEs);
    // }

    // Hamburger Icon
    const cTocButton = `<input type="checkbox" class="auto-toc--checkbox" id="toc-toggle"><label for="toc-toggle" class="auto-toc--button">
			<span class="auto-toc--icon">&nbsp;</span></label>`
    sTocTitleContainer.insertAdjacentHTML('afterbegin', cTocButton)






    /*__________________ H1 header Links ______________________________*/
    // list of headings, exclude h1 tags with class of .no-toc
    const allHeadings = document.querySelectorAll('h1')

    count = 1;


    /*__________________ Add no-toc class to excluded H1 heading_______*/
    // allHeadings.forEach(function(x, index) {
    //     let headingText = x.innerHTML

    //     if (
    //         headingText == 'Overview' ||
    //         headingText == 'Generalidades' ||
    //         headingText == 'See also' ||
    //         headingText == 'Thank you for your feedback!' ||
    //         headingText == '¡Gracias por sus comentarios!' ||
    //         headingText == 'Ver también'
    //     ) {

    //         //console.log(x)
    //         x.setAttribute('class', 'no-toc')
    //     }
    // })



    /*_____________ Headings that do not have a class of no-toc_______*/
    const sTocHeadings = document.querySelectorAll('h1:not(.no-toc),h2')


    /*______________ Add hadings to TOC ______________________________*/
    sTocHeadings.forEach(function(x, index) {
        let headingText = x.innerHTML
        let headingHTML = x.outerHTML
            // let headingHTMLSubtoc = headingHTML.indexOf("subtoc-heading") >= 0


        if (headingHTML.indexOf("<h1>") >= 0) {
            sTocLinkContainer.insertAdjacentHTML(
                'beforeend', `<span class="auto-toc-heading"><a href="#toc-heading${count}">${headingText}</a></span>`
            )

            x.setAttribute('id', 'toc-heading' + count)
        } else if (headingHTML.indexOf("<h2>") >= 0) {

            sTocLinkContainer.insertAdjacentHTML(
                'beforeend', `<span class="auto-toc-sub-heading"><a href="#toc-heading${count}">${headingText}</a></span>`
            )
            x.setAttribute('id', 'toc-heading' + count)
                //console.log(headingHTML)

        } else {
            return
        }

        count++
    })


    /*____________________ Display TOC when icon clicked ________________*/
    const tocBtn = document.querySelector('.auto-toc--button')


    tocBtn.addEventListener('click', function() {
        const tocLinks = document.querySelector('.auto-toc--link-container')
        tocLinks.classList.toggle('display-headings')

        /*var contentSize = $('.auto-toc').find('.auto-toc--link-container').outerHeight(true);
        //console.log('Content size is', contentSize, 'pixels');*/
    })






    /*____________________ Add styles to subtoc links_______________________*/
    /*
    const allTocAnchors = document.querySelectorAll('.auto-toc-heading a')
    allTocAnchors.forEach(function(anchors) {

      let anchorText = anchors.innerHTML

      if (  
       
        anchorText === 'MariaDB' ||
        anchorText === 'Apache' ||
        anchorText === 'FFmpeg y Libav' ||
        anchorText === 'FilterProvider syntax change' ||
        anchorText === 'Cambiar la sintaxis de FilterProvider'  ||
        anchorText === 'Passenger' ||
        anchorText === 'PHP error logging' ||
        anchorText === 'Registro de errores de PHP' ||
        anchorText === 'Python Django errors' ||
        anchorText === 'Errores de Python Django' ||    
        anchorText === 'Cambios en la versión de Python' ||
        anchorText === 'Python virtualenv' ||

        anchorText === 'Cambios de servidor'  ||
        anchorText === 'Palabras reservadas'
     
      ) {
        anchors.style.color = '#00CAAA'
        anchors.style.marginLeft = '10px'
        }
    })
    */





    /*____________________ COUNT Total TOC headings in Auto Toc and create scroll offsets ________________*/
    // const totalHeadings = Array.from(document.querySelectorAll('1:not(.no-toc)'))
    const totalHeadings = Array.from(document.querySelectorAll('h1:not(.no-toc),h2.subtoc-heading'))
        // console.log(totalHeadings)

    function calculateAverage(array) {
        let count = 1;

        array.forEach(function(value, index) {
            let headingText = value.innerHTML
                //console.log(headingText)
                // Count total characters in all headings
            let headingTextLength = value.innerHTML.length
                // console.log("Heading length: " + headingTextLength)

            // Create horizontal scroll bar if heading length is over 47 characters  
            if (headingTextLength >= 48) {
                // console.log(headingText)
                // console.log("_____Increase Count: " + count)
                count++
            }
            // console.log("COUNT: " + count)
            count++
        });

        return count - 1;
    }

    const calculatedHeadings = (calculateAverage(totalHeadings));
    //console.log("calculatedHeadings")
    //console.log(calculatedHeadings);


    if (calculatedHeadings == 3) {
        const tocLinkMenu3 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu3.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 3")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -150
            }, 500);
        });
    } else if (calculatedHeadings == 4) {
        const tocLinkMenu4 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu4.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 4")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -185
            }, 500);
        });
    } else if (calculatedHeadings == 5) {
        const tocLinkMenu5 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu5.style.overflow = 'hidden'

        const tocLinkMenu = document.querySelector('.auto-toc--link-container')
        tocLinkMenu.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 5")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -220
            }, 500);
        });
    } else if (calculatedHeadings == 6) {
        const tocLinkMenu6 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu6.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 6")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -250
            }, 500);
        });
    } else if (calculatedHeadings == 7) {
        const tocLinkMenu7 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu7.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 7")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -310
            }, 500);
        });
    } else if (calculatedHeadings == 8) {
        const tocLinkMenu8 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu8.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 8")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -315
            }, 500);
        });
    } else if (calculatedHeadings == 9) {
        const tocLinkMenu9 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu9.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 9")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -350
            }, 500);
        });
    } else if (calculatedHeadings == 10) {
        const tocLinkMenu10 = document.querySelector('.auto-toc--link-container')
        tocLinkMenu10.style.overflow = 'hidden'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            console.log("CLICKED 10")
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -380
            }, 500);
        });
    }

    // Set max height on link container if over 10 headings
    else if (calculatedHeadings > 10) {
        const tocLinkMenu = document.querySelector('.auto-toc--link-container')
            // const tocLinkValues =
            //getComputedStyle(tocLinkMenu).getPropertyValue('height')  
        tocLinkMenu.style.height = '379px'
        tocLinkMenu.style.overflow = 'auto'

        $("div.auto-toc--link-container").on('click', 'a[href^="#"]', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top + -455
            }, 500);
        });
    }


} else {
    console.log('No TOC')
}