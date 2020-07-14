function watchForm() {
    $( '#js-shopping-list-form' ).on( 'submit', function( event) {
        event.preventDefault();
        let fruit = $( '#shopping-list-entry' ).val();
        appendToList(fruit);
    });
};

function appendToList(fruit) {
  console.log(fruit)
  $( '.shopping-list' ).append(`<li>
        <span class="shopping-item"> ${fruit}
        </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
}

function watchCheck() {
  $( '.shopping-list').on( 'click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find( '.shopping-item' ).toggleClass( 'shopping-item__checked' );
  })
}


function watchDelete() {
  $( '.shopping-list').on( 'click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove( 'li' );  
  })
}

$(function (){
watchForm();
watchCheck();
watchDelete();
})