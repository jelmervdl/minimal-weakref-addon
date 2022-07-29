var ref;

var registry = new FinalizationRegistry(tag => {
    console.log('[content-script] released', tag);
})

function test() {
    const body = document.querySelector('body');

    ref = new WeakRef(body);
    console.log('[content-script] created ref to', ref.deref());
    // registry.register(body, 'document.body');

    document.body.addEventListener('click', e => {
        console.log('[content-script] ref is', ref.deref());
    });
}

test();
