function handleCommand(text, chatId) {

  if (text === "/help") {
    return "Daftar Perintah:\n/help\n/start\n/materi";
  }

  if (text === "/start") {
    return "Selamat datang di bot Pak Rohmat 👨‍🏫";
  }

  return "Perintah tidak dikenal";
}
