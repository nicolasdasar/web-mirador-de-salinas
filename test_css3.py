with open('styles.css', 'r') as f:
    lines = f.readlines()

stack = []
for i, line in enumerate(lines):
    for char_pos, char in enumerate(line):
        if char == '{':
            stack.append((i+1, line.strip()))
        elif char == '}':
            if stack:
                stack.pop()

if stack:
    print("Unmatched '{' found at:")
    for pos, text in stack:
        print(f"Line {pos}: {text}")
