<script>
    let active = false;
    let move = false;
    let hidden = false;
    
    function toggleTriangle() {
      if (!active) { // only start the timeout when activating
        active = !active;
        setTimeout(() => {
          hidden = true;
        }, 10000);  // Hide after 10 seconds
      } else {
        // Reset all states when clicked again
        active = false;
        move = false;
        hidden = false;
      }
    }
    
    function handleTransitionEnd() {
      if (active) {
        move = true;
      }
    }
  </script>
    
  <button 
    on:click={toggleTriangle} 
    on:transitionend={handleTransitionEnd}
    class={`triangle ${active ? 'scaled rotated' : ''} ${move ? 'move' : ''} ${hidden ? 'hidden' : ''}`}>
  </button>
  