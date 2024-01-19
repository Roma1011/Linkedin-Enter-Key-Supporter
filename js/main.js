document.onkeydown = function (e) 
{
    e = e || window.event;
    if (e.key === 'Enter') 
    {
        chrome.storage.sync.get(['enable'], function (items) 
        {
            var enable = items.enable;
            if (e.shiftKey) {} 
            else 
            {
                if (enable === '1') 
                {
                    if (document.URL.includes('feed')) {
                        var submitButton = document.getElementsByClassName('comments-comment-box__submit-button')[0];
                        if (submitButton && submitButton.offsetParent !== null) 
                        {
                            submitButton.click();
                        }
                    }
                    var sendButton = document.getElementsByClassName('msg-form__send-button artdeco-button artdeco-button--1')[0];
                    if (sendButton && sendButton.offsetParent !== null) 
                    {
                        sendButton.click();
                    }
                }
            }
        });
    }
};
