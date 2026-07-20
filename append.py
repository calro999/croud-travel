import sys

src_file = sys.argv[1]
dst_file = sys.argv[2]

try:
    with open(src_file, "r", encoding="utf-8") as f_src:
        content = f_src.read()
    with open(dst_file, "a", encoding="utf-8") as f_dst:
        f_dst.write("\n\n" + content)
    print("Successfully appended")
except Exception as e:
    print(f"Error: {e}")
