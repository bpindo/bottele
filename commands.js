function handleCommand(text, chatId) {

  if (text === "/help") {
    return "Daftar Perintah:\n/help\n/start";
  }

  if (text === "/start") {
    return "Selamat datang Pak Rohmat 😎";
  }

  return "Perintah tidak dikenal";
}
