import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <div class="bg-green-500 2md:bg-black">test</div>
        </main>
      </div>
    );
  }
}
