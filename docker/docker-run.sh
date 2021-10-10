docker run --rm -it \
  -p3000:3000 \
  -e PORT=3000 \
  -e DATABASE_URL=postgresql://demouser:demopass@localhost:5432/blitz-tutorial
  blitz-tutorial bash

  # -e DATABASE_URL="postgresql://postgres:XVSq*wn=4=pP@db.pjmlxnolasqljkxglewh.supabase.co:5432/postgres" \

