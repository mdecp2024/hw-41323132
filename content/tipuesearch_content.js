var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:\xa0\xa0 fqpabi8 \n 個人倉儲:  https://github.com/mdecp2024/hw-41323132 \n 個人網站:\xa0  https://mdecp2024.github.io/hw-41323132 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '題目一 \n \n \n 題目二 \n \n \n 題目三 \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '題目一( "*"畫出圓 ) \n import math\n \nsize = 10  # 設定字元區域的大小為 10x10\nradius = 3.5 # 設定半徑為 3.5\ncenter = 3.5  # 圓心位置設為 (3.5, 3.5)\n \nfor y in range(size):\n    for x in range(size):\n        # 計算每個點到圓心的距離\n        distance = math.sqrt((x - center) ** 2 + (y - center) ** 2)\n         \n        # 判斷該點是否在圓的邊緣附近\n        if radius - 0.5 < distance < radius + 0.5:\n            print("＊", end="")  # 使用全形字符 "＊"\n        else:\n            print("\u3000", end="")  # 使用全形空格\n    print() \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第六題:06_list_slicing \n 範例程式: 程式 \n \n 根據索引選取單個或多個元素。 \n 設定步長來篩選間隔元素。 \n 使用負數索引來倒序選取元素。 \n 反轉整個列表。 \n cities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\nprint(cities) # 輸出所有城市\nprint(cities[1]) # 輸出索引 1 的城市\nprint(cities[1:4]) # 從索引 1 到 3（不包含索引 4）\nprint(cities[1:4:2]) # 從索引 1 到 3，每隔一個元素取一次\nprint(cities[0:3]) # 從索引 0 到 2（不包含索引 3）\nprint(cities[:3]) # 與上面相同，從開始到索引 2（不包含索引 3）\nprint(cities[2:5]) # 從索引 2 到 4（不包含索引 5）\nprint(cities[2:]) # 從索引 2 開始到列表結尾\nprint(cities[0:5:2]) # 從索引 0 到 4，每隔一個元素取一次\nprint(cities[::2]) # 從開始到結尾，每隔一個元素取一次\nprint(cities[4]) # 輸出索引 4 的城市\nprint(cities[-1]) # 輸出最後一個元素（倒數第 1 個）\nprint(cities[-4:-1]) # 切片：從倒數第 4 個到倒數第 2 個（不包含倒數第 1 個）\nprint(cities[3:0:-1]) # 從索引 3 到 1（不包含索引 0）\nprint(cities[-2:-5:-1]) # 從倒數第 2 個到倒數第 5 個\nprint(cities[::-1]) # 將整個列表反轉 \n \n \n 第七題:07_list_slicing_use \n 範例程式: 程式 \n 列表操作（例如合併和插入元素）允許靈活地修改列表內容。 \n 修改列表中的切片會影響原列表的結構。 \n 使用 \xa0 del \xa0 可以刪除列表中的特定元素或整個列表。 \n # 定義感官列表\nsenses = ["eyes", "nose", "ears", "tongue", "skin"]\nprint (senses) # 輸出：[\'eyes\', \'nose\', \'ears\', \'tongue\', \'skin\']\n  \n# 修改(索引 1)的元素替換為 "smell"\nsenses[1] = "smell"\nprint (senses) # 輸出：[\'eyes\', \'smell\', \'ears\', \'tongue\', \'skin\']\n  \n# 修改索引第三和 第四的元素替換為 ["taste", "touch"]，\nsenses[3:5] = ["taste", "touch"]\nprint (senses) # 輸出：[\'eyes\', \'smell\', \'ears\', \'taste\', \'touch\']\n  \n# 修改索引第零到第二的元素替換為 ["sight", "hearing"]\nsenses[0:3:2] = ["sight", "hearing"]\nprint (senses) # 輸出：[\'sight\', \'smell\', \'hearing\', \'taste\', \'touch\']\n  \n# 定義行星列表\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\nprint (planets) # 輸出：[\'Mercury\', \'Mars\', \'Earth\', \'Neptune\']\n  \n# 向 planets "Jupiter"加入列表中，\nplanets = planets + ["Jupiter"]\nprint (planets) # 輸出：[\'Mercury\', \'Mars\', \'Earth\', \'Neptune\', \'Jupiter\']\n  \n# 將 "Venus" 插入到 planets 列表的索引 2 位置\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\nprint (planets) # 輸出：[\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Jupiter\']\n  \n# 在索引 5 位置插入 "Uranus" 和 "Saturn"\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]\nprint(planets) # 輸出：[\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Uranus\', \'Saturn\', \'Jupiter\']\n  \n# 定義房間列表\nhouse = ["kitchen", "dining room", "living room", "bedroom", "bathoom", "garden", "balcony", "terrace"]\nprint (house) # 輸出：[\'kitchen\', \'dining room\', \'living room\', \'bedroom\', \'bathoom\', \'garden\', \'balcony\', \'terrace\']\n  \n# 刪除索引 1 的元素（\'dining room\'）\ndel house[1]\nprint (house) # 輸出：[\'kitchen\', \'living room\', \'bedroom\', \'bathoom\', \'garden\', \'balcony\', \'terrace\']\n  \n# 刪除索引 4 到 5 的元素（\'garden\' 和 \'balcony\'）\ndel house[4:6]\nprint (house) # 輸出：[\'kitchen\', \'living room\', \'bedroom\', \'bathoom\', \'terrace\']\n  \n# 刪除步長為 2 的元素（\'kitchen\'，\'bedroom\'，\'terrace\'）\ndel house[::2]\nprint (house) # 輸出：[\'living room\', \'bathoom\']\n  \n# 刪除整個 house 列表\ndel house\n  \n# 嘗試輸出會引發錯誤，因為 house 列表已被刪除\nprint (house) # NameError: name \'house\' is not \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13 hw', 'text': '\n  利用 Brython 繪圖  \n \n  引入 Brython 程式庫  \n \n \n  啟動 Brython  \n \n  設置容器  \n \n  利用 Brython 繪圖  \n \n \n # 設置畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n\n\n# 儲存幾何參數\nshapes = {\n    "circle1": (200, 200, 141.4),\n    "circle2": (300, 300, 141.4),\n    "square1": (100, 100, 300, 300),\n    "square2": (200, 200, 400, 400),\n}\n\n# 簡化的判定函式\ndef is_in_circle(x, y, cx, cy, r):\n    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef is_in_square(x, y, x1, y1, x2, y2):\n    return x1 <= x <= x2 and y1 <= y <= y2\n\n# 根據點判定區域並返回顏色\ndef get_region_color(x, y):\n    c1 = is_in_circle(x, y, *shapes["circle1"])\n    c2 = is_in_circle(x, y, *shapes["circle2"])\n    s1 = is_in_square(x, y, *shapes["square1"])\n    s2 = is_in_square(x, y, *shapes["square2"])\n\n    # 不在任何圓內\n    if not c1 and not c2:\n        return None\n\n    # 同時在兩個圓內\n    if c1 and c2:\n        return "#FFE153"  \n\n    # 第一個圓的判定\n    if c1:\n        if s1:\n            return "#808040" if y < x else "#FFFF00"  # 綠色或黃色\n        if y < shapes["square1"][1]:\n            return "#E8E8D0"  \n        if y > shapes["square1"][3]:\n            return "#8080C0"  \n        if x < shapes["square1"][0]:\n            return "#743A3A"  \n        if x > shapes["square1"][2]:\n            return "#5A5AAD"  \n\n    # 第二個圓的判定\n    if c2:\n        if s2:\n            return "#FFAD86"  \n        if y < shapes["square2"][1]:\n            return "#005757"  \n        if y > shapes["square2"][3]:\n            return "#4F4F4F"  \n        if x < shapes["square2"][0]:\n            return "#600030"  \n        if x > shapes["square2"][2]:\n            return "#921AFF"  \n\n    return "#D3D3D3"  # 預設其他區域為淺灰色\n\n# 繪製掃描點並著色\ndef scan_and_draw():\n    step = 1  # 減小步長提升細膩程度\n    for y in range(0, canvas.height, step):\n        for x in range(0, canvas.width, step):\n            color = get_region_color(x, y)\n            if color:\n                ctx.fillStyle = color\n                ctx.fillRect(x, y, step, step)  # 使用細小矩形填充\n\n# 開始掃描和著色\nscan_and_draw() \n \n', 'tags': '', 'url': 'w13 hw.html'}, {'title': 'w14_ex', 'text': '註解畫三個圓每次顏色的結果都不同 \n from browser import html\nfrom browser import document as doc\nimport random\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    # 創建 canvas 並設置寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n   \n    # 獲取 canvas 的 2D 上下文\n    ctx = canvas.getContext("2d")\n   \n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布\n    canvas, ctx = initialize_canvas(400, 400)\n   \n    # 清除畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n   \n    # 顏色區域存儲\n    color_dict = {}\n\n    # 使用掃描線方法填充區域\n    for py in range(0, canvas.height):\n        # 逐行掃描，判斷每個點是否在圓內\n        current_color = None  # 當前掃描線區域的顏色\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n           \n            if in_circle1 and in_circle2 and in_circle3:\n                # 交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 只在圓1與圓2的交集區域\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 只在圓2與圓3的交集區域\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 只在圓1與圓3的交集區域\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 點不在圓內，畫外區域\n                current_color = "white"  # 背景色白色\n\n            # 填充顏色\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 三個圓心和半徑的設定\n# 假設三個圓心分佈成等邊三角形的頂點，並設置它們的半徑\nradius = 100  # 圓的半徑\nx1, y1 = 150, 200  # 圓1 圓心\nx2, y2 = 250, 200  # 圓2 圓心\nx3, y3 = 200, 100  # 圓3 圓心\n\n# 呼叫畫圓函式\ndraw_circles(x1, y1, radius, x2, y2, radius, x3, y3, radius)\n \n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w15', 'text': '第一題\xa0 以"從 1 累加到 100" \n # 初始化總和變量\ntotal_sum = 0\n\n# 從 1 累加到 100\nfor i in range(1, 101):\n    total_sum += i\n\n# 顯示結果\nprint("從 1 累加到 100 的總和是:", total_sum)\n \n \n \n 第二題\xa0 "addto" \n # 定義函式 addto\ndef addto(start, end):\n    total_sum = 0\n    for i in range(start, end + 1):\n        total_sum += i\n    return total_sum\n\n# 呼叫函式 addto，並輸出結果\nresult = addto(1, 100)\nprint("從 1 累加到 100 的總和是:", result)\n \n \n \n 第三題\xa0 add_only_even \n # 定義函式 add_only_even，接受兩個參數 start 和 end\ndef add_only_even(start, end):\n    total_sum = 0\n    # 使用 for 迴圈遍歷從 start 到 end 的所有數字\n    for i in range(start, end + 1):\n        if i % 2 == 0:  # 判斷是否為偶數\n            total_sum += i  # 累加偶數\n    return total_sum\n\n# 讓用戶輸入起始值和結束值\nstart = int(input("請輸入起始整數: "))\nend = int(input("請輸入結束整數: "))\n\n# 呼叫函式並輸出結果\nresult = add_only_even(start, end)\nprint(f"從 {start} 到 {end} 的偶數總和是: {result}")\n \n \n \n 第四題  add_avoid_8 \n def add_avoid_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        if \'8\' not in str(num):  # 檢查數字是否包含 "8"\n            total += num\n    return total\n \n# 呼叫函式，計算從 1 加到 100 並避免數字包含 "8" 的總和\ntotal = add_avoid_8(1, 100)\n \n# 印出計算結果\nprint(total)  # 輸出避開 "8" 的總和結果 \n \n 第五題 add_avoid_8 8跟3去掉 \n # 定義函式，計算不包含數字 "3" 和 "8" 的數字總和\ndef add_avoid_3_and_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        if \'3\' not in str(num) and \'8\' not in str(num):  # 檢查數字是否包含 "3" 或 "8"\n            total += num\n    return total\n\n# 呼叫函式，計算範圍內的總和\nstart = 1\nend = 100\ntotal = add_avoid_3_and_8(start, end)\n\n# 印出計算結果\nprint(f"從 {start} 到 {end} 的數字總和（排除包含 \'3\' 和 \'8\' 的數字）為：{total}")\n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '圖形 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 取得 canvas 的繪圖上下文\nctx = canvas.getContext("2d")\n\n# 畫出 X 軸\nctx.beginPath()\nctx.strokeStyle = \'black\'\nctx.lineWidth = 2\nctx.moveTo(31, 32)  # 原點\nctx.lineTo(400, 32)  # 向右延伸\nctx.stroke()\n\n# 畫出 Y 軸\nctx.beginPath()\nctx.moveTo(31, 32)  # 原點\nctx.lineTo(31, 400)  # 向下延伸\nctx.stroke()\n\n# 標示原點座標\nctx.font = "12px Arial"\nctx.fillStyle = "black"\nctx.fillText("(31, 32)", 35, 45)\n\n# 位移偏移量，將原點 (31, 32) 作為新的繪圖基準\noffset_x = 31\noffset_y = 32\n\n# 畫橙色六邊形\nctx.beginPath()\nctx.fillStyle = "#F47920"\nctx.moveTo(offset_x + 40, offset_y + 63)\nctx.lineTo(offset_x + 60, offset_y + 33)\nctx.lineTo(offset_x + 90, offset_y + 33)\nctx.lineTo(offset_x + 110, offset_y + 63)\nctx.lineTo(offset_x + 90, offset_y + 93)\nctx.lineTo(offset_x + 60, offset_y + 93)\nctx.closePath()\nctx.fill()\n\n# 畫綠色菱形\nctx.beginPath()\nctx.fillStyle = "#009F95"\nctx.moveTo(offset_x + 130, offset_y + 63)\nctx.lineTo(offset_x + 150, offset_y + 33)\nctx.lineTo(offset_x + 170, offset_y + 63)\nctx.lineTo(offset_x + 150, offset_y + 93)\nctx.closePath()\nctx.fill()\n\n# 藍色三角形 (頂點在菱形右側，方向朝下)\nctx.beginPath()\nctx.fillStyle = "#40B4CB"\nctx.moveTo(offset_x + 174, offset_y + 63)  # 頂點在菱形右側\nctx.lineTo(offset_x + 154, offset_y + 93)  # 左下角\nctx.lineTo(offset_x + 194, offset_y + 93)  # 右下角\nctx.closePath()\nctx.fill()\n\n# 畫粉紅色圓形\nctx.beginPath()\nctx.fillStyle = "#EB008B"\nctx.arc(offset_x + 220, offset_y + 63, 20, 0, 2 * 3.14159)\nctx.fill()\n\n# 畫黃色正方形\nctx.beginPath()\nctx.fillStyle = "#FDD56A"\nctx.rect(offset_x + 260, offset_y + 43, 40, 40)\nctx.fill()\n\n# 畫藍色矩形\nctx.beginPath()\nctx.fillStyle = "#003A70"\nctx.rect(offset_x + 320, offset_y + 53, 60, 20)\nctx.fill() \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w16_exam2', 'text': '迷宮 \n from browser import html\nfrom browser import document as doc\n\n# 設定迷宮畫布大小\ncanvas = html.CANVAS(width=300, height=300)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 取得 canvas 的繪圖上下文\nctx = canvas.getContext("2d")\n\n# 標示左上方點座標 (31, 32)\nctx.font = "12px Arial"\nctx.fillStyle = "red"\nctx.fillText("(31, 32)", 35, 22)\n\n# 定義藍色線條的屬性\nctx.strokeStyle = "blue"\nctx.lineWidth = 2\n\n# 設定迷宮起點的偏移量\noffset_x, offset_y = 31, 32\n\n# 迷宮的線條座標，這些可以在列表中定義，便於後期維護\nmaze_lines = [\n    # 每個元素為一組座標對，表示從哪個點到哪個點\n    ((0, 0), (86, 0)),\n    ((0, 0), (0, 200)),\n    ((120, 0), (200, 0)),\n    ((200, 0), (200, 200)),\n    ((120, 200), (200, 200)),\n    ((0, 200), (86, 200)),\n    ((86, 157), (86, 200)),\n    ((86, 157), (126, 157)),\n    ((160, 120), (160, 200)),\n    ((160, 120), (50, 120)),\n    ((50, 120), (50, 163)),\n    ((126, 80), (126, 120)),\n    ((0, 80), (86, 80)),\n    ((86, 40), (86, 80)),\n    ((40, 40), (160, 40)),\n    ((160, 40), (160, 83)),\n]\n\n# 使用輔助函數來簡化畫線的過程\ndef draw_line(start, end):\n    ctx.moveTo(offset_x + start[0], offset_y + start[1])\n    ctx.lineTo(offset_x + end[0], offset_y + end[1])\n\n# 開始繪製迷宮\nctx.beginPath()\n\n# 遍歷迷宮的每條線，繪製出來\nfor start, end in maze_lines:\n    draw_line(start, end)\n\n# 結束繪製\nctx.stroke()\n \n \n \n \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w16_exam3', 'text': '走迷宮 \n from browser import html\nfrom browser import document as doc\n\n\n# 設定迷宮畫布大小\ncanvas = html.CANVAS(width=300, height=300)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 取得 canvas 的繪圖上下文\nctx = canvas.getContext("2d")\n\n# 標示左上方點座標 (31, 32)\nctx.font = "12px Arial"\nctx.fillStyle = "red"\nctx.fillText("(31, 32)", 35, 22)\n\n# 定義藍色線條的屬性\nctx.strokeStyle = "blue"\nctx.lineWidth = 2\n\n# 設定迷宮起點的偏移量\noffset_x, offset_y = 31, 32\n\n# 迷宮的線條座標\nmaze_lines = [\n    ((0, 0), (86, 0)),\n    ((0, 0), (0, 200)),\n    ((120, 0), (200, 0)),\n    ((200, 0), (200, 200)),\n    ((120, 200), (200, 200)),\n    ((0, 200), (86, 200)),\n    ((86, 157), (86, 200)),\n    ((86, 157), (126, 157)),\n    ((160, 120), (160, 200)),\n    ((160, 120), (50, 120)),\n    ((50, 120), (50, 163)),\n    ((126, 80), (126, 120)),\n    ((0, 80), (86, 80)),\n    ((86, 40), (86, 80)),\n    ((40, 40), (160, 40)),\n    ((160, 40), (160, 83)),\n]\n\n# 使用輔助函數來簡化畫線的過程\ndef draw_line(start, end):\n    ctx.moveTo(offset_x + start[0], offset_y + start[1])\n    ctx.lineTo(offset_x + end[0], offset_y + end[1])\n\n# 繪製迷宮\nctx.beginPath()\nfor start, end in maze_lines:\n    draw_line(start, end)\nctx.stroke()\n\n# 定義紅色路徑屬性\nctx.strokeStyle = "red"\nctx.lineWidth = 3\n\n# 解答路徑\npath_solution = [\n    (100, 0),    \n    (100, 20),  \n    (180, 20),  \n    (180, 100),  \n    (140, 100),\n    (140, 60),\n    (100, 60),\n    (100,100),\n    (25,100),\n    (25,180),\n    (65,180),\n    (65,140),\n    (140,140),\n    (140,180),\n    (100,180),\n    (100,200),\n]\n\n# 繪製紅色路徑\nctx.beginPath()\nfor i in range(len(path_solution) - 1):\n    start = path_solution[i]\n    end = path_solution[i + 1]\n    draw_line(start, end)\nctx.stroke()\n \n \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n \n \n \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};