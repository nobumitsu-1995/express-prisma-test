import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 条件一致データの取得
  const alice = await prisma.user.findUnique({
    where: { email: 'alice@example.com' }
  })
  // 全権取得
  const users = await prisma.user.findMany()
  // joinして取得
  const bob = await prisma.user.findUnique({
    where: {email: 'bob@example.com'},
    include: { posts: true }
  })
  // 条件指定してデータを取得
  const posts = await prisma.post.findMany({
    where: {
      // タイトルがtitleから始まる条件指定
      title: {
        startsWith: 'title'
      }
    },
    // 何件取得するか
    take: 5,
    // idの昇順で並べ替え
    orderBy: {
        id: 'asc'
    },
    // author = Userテーブルとjoinして取得
    include: { author : true }
  })

  
  console.log(alice)
  console.log(users)
  console.log(bob)
  console.log(posts)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })