document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 아이템 리스트를 선택
    var menuItems = document.querySelectorAll('.menu_list li');

    // 각 메뉴 아이템에 클릭 이벤트 리스너를 추가
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // 이미 'active' 클래스를 가진 아이템에서 'active' 클래스 제거
            document.querySelectorAll('.menu_list li.active').forEach(function(activeItem) {
                activeItem.classList.remove('active');
            });

            // 클릭된 아이템에 'active' 클래스 추가
            item.classList.add('active');
        });
    });
});
