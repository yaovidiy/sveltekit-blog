<script>
</script>

<span class="loader-container">
	<span class={`bg-white loader-dot`} />
</span>

<style>
	.loader-container {
		display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
		width: 100%;
		height: 100%;
	}

	.loader-dot {
		display: inline-block;
		width: 28px;
		height: 28px;
		border-radius: 50%;
    animation: scale 1s infinite linear;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
	}

  .loader-dot:nth-child(2) {
    animation-delay: 1s;
  }

  .loader-dot:nth-child(3) {
    animation-delay: 2s;
  }

	@keyframes scale {
		0% {
			transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);

		}
    75% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
	}
</style>
