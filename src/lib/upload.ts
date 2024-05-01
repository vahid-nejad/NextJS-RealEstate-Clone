import { createClient } from "@supabase/supabase-js";

export async function uploadImages(images: File[]) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const data = await Promise.all(
    images.map((file) =>
      supabase.storage.from("propertyImages").upload(`${file.name}_${Date.now()}`, file)
    )
  );

  const urls = data.map(
    (item) =>
      supabase.storage.from("propertyImages").getPublicUrl(item.data?.path ?? "").data.publicUrl
  );

  return urls;
}

export async function uploadAvatar(image: File) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const data = await supabase.storage.from("avatars").upload(`${image.name}_${Date.now()}`, image);

  console.log({ data });

  const urlData = await supabase.storage.from("avatars").getPublicUrl(data.data?.path!);

  return urlData.data.publicUrl;
}


