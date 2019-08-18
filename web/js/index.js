$(document).ready(function() {
  
  // var tabHeight = $('.tab.active').height();
  // function animateTabHeight() {
  //     tabHeight = $('.tab.active').height();
  //     $('.tab-content').stop().css({ height: tabHeight + 'px' });
  // }
  // animateTabHeight();

  var $wrapper = $('.tab-wrapper'),
      $allTabs = $wrapper.find('.tab-content > div'),
      $tabMenu = $wrapper.find('.tab-menu li'),
      $line = $('<div class="line"></div>').appendTo($tabMenu);
  
  $allTabs.not(':first-of-type').fadeOut(); 
  $tabMenu.filter(':first-of-type').find(':first').width('100%')
  
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $tabMenu.on('click', function() {
    
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    // animateTabHeight();
    
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).fadeOut();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').fadeIn();
    // animateTabHeight();
  });

});//end ready