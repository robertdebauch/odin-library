import { createElement, createText } from './ui-factory.js';

export function showMessage(
  data,
  type_of_message,
  start_text,
  end_text,
  target,
  formToReset = null,
) {
  let success_message = 'success-message';
  let delete_message = 'delete-message';

  const message = createElement('div');
  const titleName = createText(`${data.title}`);
  const authorName = createText(`${data.author}`);
  const titleContainer = createElement('div');
  const authorContainer = createElement('div');

  titleContainer.classList.add('title-text');
  authorContainer.classList.add('author-text');

  const messageContainer = createElement('div');
  const messageTextStart = createText(start_text);
  const messageTextEnd = createText(end_text);

  titleContainer.append(titleName);
  authorContainer.append(authorName);

  messageContainer.append(titleContainer);
  messageContainer.append(messageTextStart);
  messageContainer.append(authorContainer);
  messageContainer.append(messageTextEnd);

  if (type_of_message === success_message) {
    message.classList.add('success-message');
    message.classList.remove('delete-message');
  } else if (type_of_message === delete_message) {
    message.classList.add('delete-message');
    message.classList.remove('success-message');
  }

  message.append(messageContainer);

  const bookIconContainer = createElement('div');
  bookIconContainer.classList.add('pseudo-icon');
  message.insertBefore(bookIconContainer, messageContainer);

  const targetParent = target.parentNode;
  targetParent.insertBefore(message, target);

  if (type_of_message === 'success-message' && formToReset) {
    formToReset.reset();
  }

  setTimeout(() => {
    message.classList.add('fadeOut');

    setTimeout(() => {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
    }, 300);
  }, 3000);
}
