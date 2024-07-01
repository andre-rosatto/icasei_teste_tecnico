"use strict";
const MOCK_API_RESPONSE = `
{
  "kind": "youtube#searchListResponse",
  "etag": "xlHj0_15xaMIlxcu1CUG3l62dkc",
  "nextPageToken": "CBQQAA",
  "regionCode": "BR",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 20
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "KdwRGlidSI3WdRjkZdzJNXhfvlg",
      "id": {
        "kind": "youtube#video",
        "videoId": "kLxpRsQyQL0"
      },
      "snippet": {
        "publishedAt": "2024-06-29T18:53:40Z",
        "channelId": "UCrUzJ1Ju62ZEkoLakjfuLtQ",
        "title": "Ritmo do Sim - Valsa de Casamento  #wedding #valsadosnoivos #casamento #dancadosnoivos #noiva",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kLxpRsQyQL0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kLxpRsQyQL0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kLxpRsQyQL0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ritmo do Sim ",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-29T18:53:40Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "rX7YrjEmz_Sugov07xUGxFtWsKM",
      "id": {
        "kind": "youtube#video",
        "videoId": "VMAt41gE9Uc"
      },
      "snippet": {
        "publishedAt": "2024-06-27T21:00:07Z",
        "channelId": "UCCA311Pb5BCi6W3oDOYRdOQ",
        "title": "Entrada do noivo, Aleluia (Hallelujah versão para casamento) | Mais tocada | Banda Saxsom",
        "description": "casamento #bandasaxsom #musicamaistocada Diante do Rei quero agradecer Por hoje aqui te receber E nele consagrarmos ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VMAt41gE9Uc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VMAt41gE9Uc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VMAt41gE9Uc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Banda Saxsom",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-27T21:00:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "l52MiKT2Im0N5_G8pXEmUZ6yu44",
      "id": {
        "kind": "youtube#video",
        "videoId": "IPa4nmPhYBA"
      },
      "snippet": {
        "publishedAt": "2024-06-27T15:11:00Z",
        "channelId": "UCT96O0pSCoYDGwOcOVVnnyA",
        "title": "O verdadeiro #primeiroencontro #primeiraimpressão #relacionamento #amor #casamento #namoro #encontro",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IPa4nmPhYBA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IPa4nmPhYBA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IPa4nmPhYBA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SEGREDOS DO CORAÇÃO",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-27T15:11:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "KrjtT_LZ7QsTqKeLtulm3TxR3p8",
      "id": {
        "kind": "youtube#video",
        "videoId": "_iBlOc1TI7k"
      },
      "snippet": {
        "publishedAt": "2024-06-30T15:00:34Z",
        "channelId": "UC3lM0647I3TnVEcvB-0X4qA",
        "title": "CASAMENTO FICTÍCIO | Episódio 2 | Romântica - filmes e séries",
        "description": "Gleb logo descobre que, de acordo com o testamento de Kira Georgievna, ele se tornará herdeiro de toda a fortuna, mas com ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_iBlOc1TI7k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_iBlOc1TI7k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_iBlOc1TI7k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Romântica - filmes e séries",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-30T15:00:34Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "NMTvYuNUqjKzXJQXKJHaqSWtJgc",
      "id": {
        "kind": "youtube#video",
        "videoId": "thtfBEOVQ0s"
      },
      "snippet": {
        "publishedAt": "2017-06-29T19:19:10Z",
        "channelId": "UCLsfCpYZA18bNUxRVmNuKBg",
        "title": "Um Casamento",
        "description": "A partir da história do casamento da mãe da diretora realizado na Bahia dos anos 1950, o filme faz pensar sobre os ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/thtfBEOVQ0s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/thtfBEOVQ0s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/thtfBEOVQ0s/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "YouTube Movies",
        "liveBroadcastContent": "none",
        "publishTime": "2017-06-29T19:19:10Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "aN7fmiL71p6TSDi1udnOxlLiT5Y",
      "id": {
        "kind": "youtube#video",
        "videoId": "KuYh-2ryLmw"
      },
      "snippet": {
        "publishedAt": "2024-06-28T21:25:31Z",
        "channelId": "UCT96O0pSCoYDGwOcOVVnnyA",
        "title": "Quanto mais independente você é, mais difícil  #relacionamento #amor #namoro #casalfeliz #casamento",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KuYh-2ryLmw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KuYh-2ryLmw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KuYh-2ryLmw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SEGREDOS DO CORAÇÃO",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-28T21:25:31Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "57DMxRmWu5OReRNT1voN-Qa_msI",
      "id": {
        "kind": "youtube#video",
        "videoId": "50OQxwN5GDM"
      },
      "snippet": {
        "publishedAt": "2024-06-26T22:15:00Z",
        "channelId": "UC4G0il4OE3lK-PIe5i1UPbw",
        "title": "Marcha + The Scientist (instrumental) Entrada da noiva no Casamento - Coldplay",
        "description": "A clássica Marcha Nupcial e a emotiva The Scientist da banda Coldplay, interpretadas instrumental no violino. Uma escolha ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/50OQxwN5GDM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/50OQxwN5GDM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/50OQxwN5GDM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Pérola Musical",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-26T22:15:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "RoCP4kNENZIGYM7mSv6FLDVHP8M",
      "id": {
        "kind": "youtube#video",
        "videoId": "OZfo8okDZ38"
      },
      "snippet": {
        "publishedAt": "2024-06-29T18:53:29Z",
        "channelId": "UCrUzJ1Ju62ZEkoLakjfuLtQ",
        "title": "Ritmo do Sim - Valsa de Casamento  #wedding #valsadosnoivos #casamento #dancadosnoivos #noiva",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/OZfo8okDZ38/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/OZfo8okDZ38/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/OZfo8okDZ38/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ritmo do Sim ",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-29T18:53:29Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "eDXD0POLWpCvyspRmSOHMoEKKBM",
      "id": {
        "kind": "youtube#video",
        "videoId": "PBuuIPjdjbs"
      },
      "snippet": {
        "publishedAt": "2024-06-29T21:02:44Z",
        "channelId": "UCnyk9OBXBGsOyNubkiJABPg",
        "title": "Trate como REI/RAINHA! #relacionamento #casamento #casal #famíliacristã #palestra #humor",
        "description": "Como se deve tratar seu REI/MARIDO e sua RAINHA/ESPOSA | Conheça seu papel | Oficina de Casais No relacionamento ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PBuuIPjdjbs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PBuuIPjdjbs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PBuuIPjdjbs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Oficina de Casais | Pr. Nilson e Rosymara",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-29T21:02:44Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "dvVcciwwepw3VE0nnHW_GFJL1R4",
      "id": {
        "kind": "youtube#video",
        "videoId": "437QALl7Jis"
      },
      "snippet": {
        "publishedAt": "2018-02-22T15:20:38Z",
        "channelId": "UCI3g8mv9xxfNbXr5nU_yi5g",
        "title": "O Casamento do meu Melhor Amigo(Legendado)",
        "description": "Crescendo juntos, Lin Ran não é apenas o melhor amigo de Gu Jia, mas é como um namorado substituto inconscientemente, até ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/437QALl7Jis/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/437QALl7Jis/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/437QALl7Jis/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "YouTube Movies",
        "liveBroadcastContent": "none",
        "publishTime": "2018-02-22T15:20:38Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "jTfS4zZBcX262ThrikjAUfgkza8",
      "id": {
        "kind": "youtube#video",
        "videoId": "_a71u-7NXjg"
      },
      "snippet": {
        "publishedAt": "2024-06-28T23:11:35Z",
        "channelId": "UCrUzJ1Ju62ZEkoLakjfuLtQ",
        "title": "Ritmo do Sim - Valsa de Casamento  #wedding #valsadosnoivos #casamento #dancadosnoivos #noiva",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_a71u-7NXjg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_a71u-7NXjg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_a71u-7NXjg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ritmo do Sim ",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-28T23:11:35Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "x8mwhXVQqKXhN-U4O8dAAKqi6nk",
      "id": {
        "kind": "youtube#video",
        "videoId": "j3_xbWlilJI"
      },
      "snippet": {
        "publishedAt": "2024-06-29T10:18:28Z",
        "channelId": "UCalyX_s-9rfJ8-E-D2ygpOA",
        "title": "Nossa não pode nem dá um tchau #casamento #estressada #humor #casal #nosnosaturamos",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/j3_xbWlilJI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/j3_xbWlilJI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/j3_xbWlilJI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Nós nos aturamos",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-29T10:18:28Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "-RIPgfyicxUXnGSKO_0WvPNUVUk",
      "id": {
        "kind": "youtube#video",
        "videoId": "2SYfQBRrDgI"
      },
      "snippet": {
        "publishedAt": "2024-06-30T09:00:03Z",
        "channelId": "UCJp2_I4eXIrgP6mJabd1V0w",
        "title": "Dificuldades no Casamento? Descubra Como Superar Juntos - Pr. Josué Gonçalves Devocional da Família",
        "description": "LINK PARA ENTRA NO GRUPO DO WHATSAPP : https://chat.whatsapp.com/Cd8Pe7yhgYP6I6G9hCeqSs Pastor Josué ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2SYfQBRrDgI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2SYfQBRrDgI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2SYfQBRrDgI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Josué Gonçalves",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-30T09:00:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "bKFfyAsqJm3h0jekl8b6eB2qpH8",
      "id": {
        "kind": "youtube#video",
        "videoId": "m_AkjCEnKHE"
      },
      "snippet": {
        "publishedAt": "2024-06-27T09:00:45Z",
        "channelId": "UCJp2_I4eXIrgP6mJabd1V0w",
        "title": "6 PONTOS FUNDAMENTAIS PARA O CASAMENTO NÃO PERDER O BRILHO -PR. JOSUÉ GONÇALVES",
        "description": "LINK PARA ENTRA NO GRUPO DO WHATSAPP : https://chat.whatsapp.com/Cd8Pe7yhgYP6I6G9hCeqSs Pastor Josué ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/m_AkjCEnKHE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/m_AkjCEnKHE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/m_AkjCEnKHE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Josué Gonçalves",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-27T09:00:45Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "r0o0eGRDx2Q_VQdfHVOwtmYyxFo",
      "id": {
        "kind": "youtube#video",
        "videoId": "hrac6YqAQ_s"
      },
      "snippet": {
        "publishedAt": "2023-04-27T20:34:25Z",
        "channelId": "UCwN90mR6h3DgKKAXS7pmwyw",
        "title": "O Casamento mais Emocionante e Engraçado que voce vai ver - Talita e Ronaldinho 2023",
        "description": "Veja so um pouco do que fizermos no nosso casamento. Se existe casamento mais emocionante e engracado eu ainda nao vi.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hrac6YqAQ_s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hrac6YqAQ_s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hrac6YqAQ_s/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Talita & Ronaldinho",
        "liveBroadcastContent": "none",
        "publishTime": "2023-04-27T20:34:25Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "XFa7DJP4v99SnDs6Kfo9H_qATgY",
      "id": {
        "kind": "youtube#video",
        "videoId": "GOMIPJDJbWM"
      },
      "snippet": {
        "publishedAt": "2024-06-26T01:12:34Z",
        "channelId": "UC_OaSsAydgSIjUtjYn9qLog",
        "title": "CASAMENTO - Dra. Rosana Alves | Semana Mente Feliz com @DraRosanaAlves",
        "description": "Acesse http://www.novotempo.com/mentefeliz e peça grátis seu guia de estudos Mente Feliz. Descubra como resolver problemas ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GOMIPJDJbWM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GOMIPJDJbWM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GOMIPJDJbWM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Rede Novo Tempo de Comunicação",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-26T01:12:34Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_oppzzZMvS5DvVT98MG5YaxQ2E4",
      "id": {
        "kind": "youtube#video",
        "videoId": "zwAF8SRLxrY"
      },
      "snippet": {
        "publishedAt": "2022-05-02T15:00:16Z",
        "channelId": "UCO-9Uf_aIFZ2mJF4ws8wOgQ",
        "title": "NOSSO CASAMENTO - VIDEO OFICIAL",
        "description": "Que incrível poder compartilhar com vocês o vídeo oficial do nosso casamento. Sem dúvidas foi o dia mais especial das nossas ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zwAF8SRLxrY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zwAF8SRLxrY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zwAF8SRLxrY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jana Taffarel",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-02T15:00:16Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "aoBChDlT-4iMxEQmz-BEOTPaSpU",
      "id": {
        "kind": "youtube#video",
        "videoId": "MFEbLxLCC6U"
      },
      "snippet": {
        "publishedAt": "2024-06-30T13:36:37Z",
        "channelId": "UCHaSx5KrdWbxbBsX6BgwidQ",
        "title": "Além do conto de Fadas: 10 Desafios do Casamento Real | Série: Verdades que ninguém quer ouvir. #164",
        "description": "Não Perca!** Link da AULA 01 - Oficina da Autoestima Curativa ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MFEbLxLCC6U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MFEbLxLCC6U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MFEbLxLCC6U/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Rossandro Klinjey",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-30T13:36:37Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "H38md6NlFFbHNtUfspNnxYbyKFU",
      "id": {
        "kind": "youtube#video",
        "videoId": "uVV-NVUpR8A"
      },
      "snippet": {
        "publishedAt": "2024-06-27T15:40:48Z",
        "channelId": "UCSYjZad7VYad0fJUVb-BZ8A",
        "title": "PARTE 2 // Arrume-se comigo pra um CASAMENTO 💍 #humor #casamento",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uVV-NVUpR8A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uVV-NVUpR8A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uVV-NVUpR8A/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Thais Nunes Linares",
        "liveBroadcastContent": "none",
        "publishTime": "2024-06-27T15:40:48Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "df3gF25MUZq9dplq_MjduELlllU",
      "id": {
        "kind": "youtube#video",
        "videoId": "P0NpEjtfwPc"
      },
      "snippet": {
        "publishedAt": "2021-11-26T16:14:22Z",
        "channelId": "UC9BWQGUU6DsdTkqEs6KfEnQ",
        "title": "Video de CASAMENTO lindo, clássico e romântico no campo - Luli e Beto",
        "description": "Muito obrigada @nkgfilmes por este vídeo maravilhoso! Vocês todos foram incríveis! ❤️❤️❤️ Compre meus looks aqui!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/P0NpEjtfwPc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/P0NpEjtfwPc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/P0NpEjtfwPc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Luisa Accorsi",
        "liveBroadcastContent": "none",
        "publishTime": "2021-11-26T16:14:22Z"
      }
    }
  ]
}
`;
class MFVideos extends HTMLElement {
    constructor() {
        super();
        this.searchBar = null;
        this.filter = 'none';
        this.root = this.attachShadow({ mode: 'closed' });
        this.userData = this.getUserData();
    }
    attributeChangedCallback(name, _, newValue) {
        if (name === 'searchbar') {
            this.searchBar = newValue === 'show';
        }
        else if (name === 'filter') {
            this.filter = newValue === 'favorites' ? 'favorites' : 'none';
        }
        this.createHTML();
        if (this.filter === 'favorites')
            this.getVideos();
    }
    getUserData() {
        const storageData = localStorage.getItem('icasei-teste-tecnico');
        if (!storageData)
            return [];
        return JSON.parse(storageData);
    }
    saveUserData() {
        localStorage.setItem('icasei-teste-tecnico', JSON.stringify(this.userData));
    }
    toggleFavorite(videoId, svg) {
        const favoriteIdx = this.userData.indexOf(videoId);
        if (favoriteIdx === -1) {
            this.userData.push(videoId);
            svg.classList.add('favorite');
        }
        else {
            this.userData.splice(favoriteIdx, 1);
            svg.classList.remove('favorite');
        }
        this.saveUserData();
        this.dispatchEvent(new CustomEvent('favoritetoggle', {
            detail: {
                userData: this.userData
            }
        }));
    }
    getVideos() {
        const container = this.root.querySelector('#mf-videos__search-results');
        container.innerHTML = '';
        if (this.filter !== 'favorites') {
            // const query = (this.root.querySelector('#video-search') as HTMLInputElement).value.trim();
            // if (query.length === 0) return;
            // const params = [
            // 	'part=snippet',
            // 	'key=AIzaSyAgSfIYleBpVULaNr0JOSZKG2yuXLKrMeQ',
            // 	'maxResults=20',
            // 	'type=video',
            // 	'videoEmbeddable=true',
            // 	'videoDefinition=high',
            // 	`q=${query}`
            // ];
            // fetch(`https://youtube.googleapis.com/youtube/v3/search?${params.join('&')}`)
            // 	.then(res => res.json())
            // 	.then(data => {
            // 		this.populateVideoList(data.items.map((item: any) => item.id.videoId));
            // 	});
            // DEBUG
            const data = JSON.parse(MOCK_API_RESPONSE);
            this.populateVideoList(data.items.map((item) => item.id.videoId));
        }
        else {
            this.populateVideoList(this.userData);
        }
    }
    populateVideoList(videoIds) {
        const container = this.root.querySelector('#mf-videos__search-results');
        container.innerHTML = '';
        const newItems = [];
        videoIds.forEach(videoId => {
            const newItem = document.createElement('div');
            newItem.className = "mf-videos__video-container";
            newItem.innerHTML = `
				<iframe frameborder="0" allow="web-share" allowfullscreen src="https://www.youtube.com/embed/${videoId}?si=kghfvyFr2L3OYEYu"></iframe>
				<svg class="mf-videos__favorite-icon${this.userData.includes(videoId) ? ' favorite' : ''}" width="24" height="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
					<path class="fill" d="M9,1.02l2.625,4.943l5.935,1.029l-4.435,4.759l1.165,5.499l-5.29,-2.966l-5.29,2.966l1.165,-5.499l-4.435,-4.759l5.935,-1.029l2.625,-4.943Z" style="fill:#ffcd1e;"/>
					<path d="M9.529,0.344c-0.1,-0.21 -0.305,-0.344 -0.529,-0.344c-0.224,0 -0.429,0.134 -0.529,0.344l-2.461,5.228c-0,-0 -5.505,0.838 -5.505,0.838c-0.222,0.034 -0.407,0.197 -0.476,0.42c-0.069,0.224 -0.012,0.469 0.149,0.634l3.983,4.068c0,0 -0.94,5.746 -0.94,5.746c-0.038,0.232 0.053,0.466 0.235,0.604c0.181,0.138 0.422,0.156 0.62,0.047l4.924,-2.713c0,0 4.924,2.713 4.924,2.713c0.198,0.109 0.439,0.091 0.62,-0.047c0.182,-0.138 0.273,-0.372 0.235,-0.604l-0.94,-5.746c-0,0 3.983,-4.068 3.983,-4.068c0.161,-0.165 0.218,-0.41 0.149,-0.634c-0.069,-0.223 -0.254,-0.386 -0.476,-0.42l-5.505,-0.838c0,-0 -2.461,-5.228 -2.461,-5.228Zm-0.529,1.67l2.07,4.396c0.086,0.182 0.252,0.308 0.444,0.338l4.63,0.705c-0,-0 -3.35,3.421 -3.35,3.421c-0.139,0.142 -0.203,0.347 -0.17,0.547l0.791,4.832c-0,-0 -4.141,-2.281 -4.141,-2.281c-0.171,-0.095 -0.377,-0.095 -0.548,-0l-4.141,2.281c0,-0 0.791,-4.832 0.791,-4.832c0.033,-0.2 -0.031,-0.405 -0.17,-0.547l-3.35,-3.421c0,-0 4.63,-0.705 4.63,-0.705c0.192,-0.03 0.358,-0.156 0.444,-0.338l2.07,-4.396Z"/>
				</svg>`;
            const svg = newItem.querySelector('svg');
            svg.addEventListener('click', e => {
                e.stopPropagation();
                this.toggleFavorite(videoId, svg);
            });
            newItems.push(newItem);
        });
        container.append(...newItems);
    }
    createHTML() {
        this.root.innerHTML = `
			<style>@import url('./mf/mf-videos/mf-videos.css');</style>
			<h2 class="text-title">${this.searchBar ? 'Pesquisa de vídeos' : 'Favoritos'}</h2>
			${this.searchBar ?
            `
					<div id="mf-videos__search" class="input-container disabled">
						<input type="text" id="video-search" class="input-box empty">
						<label for="video-search">Pesquisar vídeos</label>
						<svg id="mf-videos__search-icon" class="disabled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
							<path d="M14.718,18.155l5.11,5.127c0.954,0.957 2.503,0.957 3.457,0c0.953,-0.957 0.953,-2.511 -0,-3.468l-5.131,-5.147c0.836,-1.441 1.315,-3.115 1.315,-4.901c-0,-5.39 -4.362,-9.766 -9.735,-9.766c-5.372,0 -9.734,4.376 -9.734,9.766c-0,5.39 4.362,9.766 9.734,9.766c1.821,-0 3.526,-0.503 4.984,-1.377Zm-4.984,-15.723c4.035,0 7.31,3.286 7.31,7.334c0,4.048 -3.275,7.334 -7.31,7.334c-4.034,-0 -7.31,-3.286 -7.31,-7.334c0,-4.048 3.276,-7.334 7.31,-7.334Z"/>
						</svg>
					</div>
				` : ''}
			<section id="mf-videos__search-results">
			</section>
		`;
        // eventlisteners da barra de busca
        if (this.searchBar) {
            this.root.querySelector('#video-search').addEventListener('input', e => this.onVideoSearchInputChange(e));
            this.root.querySelector('#mf-videos__search-icon').addEventListener('click', () => this.onVideoSearchClick());
        }
        // DEBUG
        if (this.searchBar)
            this.onVideoSearchClick();
    }
    onVideoSearchInputChange(e) {
        const target = e.target;
        if (target.value.trim().length === 0) {
            this.root.querySelector('#mf-videos__search-icon').classList.add('disabled');
            target.classList.add('empty');
        }
        else {
            this.root.querySelector('#mf-videos__search-icon').classList.remove('disabled');
            target.classList.remove('empty');
        }
    }
    onVideoSearchClick() {
        this.getVideos();
    }
}
MFVideos.observedAttributes = ['searchbar', 'filter'];
customElements.define('mf-videos', MFVideos);
