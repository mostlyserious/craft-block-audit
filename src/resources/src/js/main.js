import BlocksAudit from './components/BlocksAudit';

import.meta.glob('../{img,font,media}/**.*');

(ready => {
    if (document.readyState !== 'loading') {
        ready();
    } else {
        document.addEventListener('DOMContentLoaded', ready);
    }
})(() => {
    const target = document.querySelector('#blocks-audit');

    target.innerHTML = '';

    new BlocksAudit({ target });
});
