import TelegramBot from './src/features/tg_bot/telegram_bot';
import MessageResponse from './src/features/tg_bot/data/models/message_response';
import Message from './src/features/tg_bot/domain/entities/message';
import CallbackQuery from './src/features/tg_bot/domain/entities/callback_query';

export default TelegramBot;
export {
    TelegramBot,
    MessageResponse,
    Message,
    CallbackQuery
};