function displayLegend() {
    
      if (legIndex == 0) { // Techniques
        currentScope = 1;
        $('text:contains("想读\u200C")').stop().fadeToggle();
        $('text:contains("发现\u200C")').fadeToggle();
        $('text:contains("读完\u200C")').fadeToggle();
        $('text:contains("在读\u200C")').fadeToggle();
        $('text:contains("个人管理")').fadeToggle();
        $('a[id|=0]').fadeToggle();
        for (var f = 1; f < acmNodes[0]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = 1; f < acmNodes[0]; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      } else if (legIndex == 1) { // 科学原理
        currentScope = 2;
        $('text:contains("想读 \u200C")').stop().fadeToggle();
        $('text:contains("发现 \u200C")').fadeToggle();
        $('text:contains("读完 \u200C")').fadeToggle();
        $('text:contains("在读 \u200C")').fadeToggle();
        $('text:contains("科学原理")').fadeToggle();
        $('a[id|=1]').fadeToggle();
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      } else if (legIndex == 2) { // PLatforms 
        currentScope = 3;
        $('text:contains("想读  \u200C")').stop().fadeToggle();
        $('text:contains("发现  \u200C")').fadeToggle();
        $('text:contains("读完  \u200C")').fadeToggle();
        $('text:contains("在读  \u200C")').fadeToggle();
        $('text:contains("其他")').fadeToggle();
        $('a[id|=2]').fadeToggle();
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      } else { // languages
        currentScope = 4;
        $('text:contains("想读   \u200C")').stop().fadeToggle();
        $('text:contains("发现   \u200C")').fadeToggle();
        $('text:contains("读完   \u200C")').fadeToggle();
        $('text:contains("在读   \u200C")').fadeToggle();
        $('text:contains("工程技术")').fadeToggle();
        $('a[id|=3]').fadeToggle();
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      }
    }

    function initialHide() {
        // Initial hide Can't be done by CSS
        $('text:contains("想读 \u200C")').hide();
        $('text:contains("发现 \u200C")').hide();
        $('text:contains("读完 \u200C")').hide();
        $('text:contains("在读 \u200C")').hide();
        $('text:contains("科学原理")').hide();
        $('a[id|=1]').hide();
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).hide();
        }
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
            $('[id^='+f+'-]').hide();
            $('[id^='+f+'\\:]').hide();
        }
        $('text:contains("想读  \u200C")').hide();
        $('text:contains("发现  \u200C")').hide();
        $('text:contains("读完  \u200C")').hide();
        $('text:contains("在读  \u200C")').hide();
        $('text:contains("其他")').hide();
        $('a[id|=2]').hide();
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).hide();
        }
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
            $('[id^='+f+'-]').hide();
            $('[id^='+f+'\\:]').hide();
        }
        $('text:contains("想读   \u200C")').hide();
        $('text:contains("发现   \u200C")').hide();
        $('text:contains("读完   \u200C")').hide();
        $('text:contains("在读   \u200C")').hide();
        $('text:contains("工程技术")').hide();
        $('a[id|=3]').hide();
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).hide();
        }
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
            $('[id^='+f+'-]').hide();
            $('[id^='+f+'\\:]').hide();
        }
        // End of initial hide
      }
      
      function sepcificHide() {
      
        if (quadrantScope != 1) { // Techniques
          $('text:contains("想读\u200C")').hide();
          $('text:contains("发现\u200C")').hide();
          $('text:contains("读完\u200C")').hide();
          $('text:contains("在读\u200C")').hide();
          $('text:contains("个人管理")').hide();
        }
        if (quadrantScope != 2) { // 科学原理
          $('text:contains("想读 \u200C")').hide();
          $('text:contains("发现 \u200C")').hide();
          $('text:contains("读完 \u200C")').hide();
          $('text:contains("在读 \u200C")').hide();
          $('text:contains("科学原理")').hide();
        }
        if (quadrantScope != 3) { // PLatforms 
          $('text:contains("想读  \u200C")').hide();
          $('text:contains("发现  \u200C")').hide();
          $('text:contains("读完  \u200C")').hide();
          $('text:contains("在读  \u200C")').hide();
          $('text:contains("其他")').hide();
        }
        if (quadrantScope != 4) { // languages
          $('text:contains("想读   \u200C")').hide();
          $('text:contains("发现   \u200C")').hide();
          $('text:contains("读完   \u200C")').hide();
          $('text:contains("在读   \u200C")').hide();
          $('text:contains("工程技术")').hide();
        }
      }